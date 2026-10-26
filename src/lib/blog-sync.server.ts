import { supabaseAdmin as db } from '@/integrations/supabase/client.server';
import { cleanArticleHtml, BLOG_CALL_LIMIT, BLOG_DETAIL_LIMIT, BLOG_GAP_MS } from './blog-content';
import { z } from 'zod';

const summarySchema = z.object({ id: z.number().int().positive(), slug: z.string().min(1), title: z.string(), updated_at: z.string().nullish(), created_at: z.string().nullish(), meta_description: z.string().nullish(), hero_image_url: z.string().nullish(), languageCode: z.string().nullish() }).passthrough();
const detailSchema = summarySchema.extend({ content_html: z.string(), jsonLd: z.unknown().optional(), faqJsonLd: z.unknown().optional() });
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, Math.max(0, ms)));

export async function syncBlog(nonce: string, chain: number) {
  const key = process.env['BABYLOVEGROWTH_API_KEY'];
  if (!key) return { error: 'BabyLoveGrowth key is not configured' };
  const claim = await db.rpc('blg_claim_sync', { nonce });
  if (claim.error) throw new Error('Unable to claim article import');
  const state = claim.data?.[0];
  if (!state) return { skipped: 'locked' };
  let calls = 0, details = 0, synced = 0, remaining = 0, complete = false, limited = false, progress = false;
  let failure: string | undefined;
  let next = state.next_allowed_at ? Date.parse(state.next_allowed_at) : 0;
  let streak = state.rate_limit_streak;
  const missing = new Set(state.missing_ids);
  const save = async (values: Record<string, unknown>) => {
    const { error } = await db.from('blg_sync_state').update(values).eq('id', 1).eq('invocation_nonce', nonce);
    if (error) throw new Error('Unable to save import progress');
  };
  const api = async (path: string) => {
    await sleep(next - Date.now());
    calls++;
    let response: Response;
    try {
      response = await fetch(`https://api.babylovegrowth.ai/api/integrations${path}`, { headers: { 'X-API-Key': key, 'Content-Type': 'application/json', 'User-Agent': 'VirginiaNotary/1.0' }, signal: AbortSignal.timeout(15000) });
    } finally {
      next = Date.now() + BLOG_GAP_MS;
      await save({ next_allowed_at: new Date(next).toISOString(), lease_until: new Date(Date.now() + 180000).toISOString() });
    }
    if (response.status === 429) {
      limited = true;
      streak++;
      const retry = Number(response.headers.get('Retry-After'));
      next = Date.now() + (retry > 0 ? retry : 60 * 2 ** Math.min(streak - 1, 8)) * 1000;
      await save({ next_allowed_at: new Date(next).toISOString(), rate_limit_streak: streak });
      throw new Error('rate_limited');
    }
    if (response.status === 404) return null;
    if (!response.ok) throw new Error(response.status === 401 ? 'invalid_api_key' : response.status === 403 ? 'provider_blocked' : `provider_status_${response.status}`);
    if (streak) { streak = 0; await save({ rate_limit_streak: 0 }); }
    return response.json();
  };
  try {
    let offset = state.list_offset;
    while (calls < BLOG_CALL_LIMIT && details < BLOG_DETAIL_LIMIT) {
      const payload = await api(`/v1/articles?limit=50&offset=${offset}`);
      const raw = Array.isArray(payload) ? payload : payload?.articles ?? payload?.data?.articles ?? payload?.data;
      const articles = z.array(summarySchema).parse(raw);
      const ids = articles.map(a => a.id);
      const stored = ids.length ? await db.from('blg_articles').select('id,slug,previous_slugs,article_updated_at').in('id', ids) : { data: [], error: null };
      if (stored.error) throw new Error('Unable to read existing articles');
      const needed = articles.filter(a => {
        if (missing.has(a.id)) return false;
        const old = stored.data?.find(row => row.id === a.id);
        return !old || Boolean(a.updated_at && (!old.article_updated_at || Date.parse(a.updated_at) > Date.parse(old.article_updated_at)));
      });
      remaining = needed.length;
      for (const summary of needed) {
        if (calls >= BLOG_CALL_LIMIT || details >= BLOG_DETAIL_LIMIT) break;
        details++;
        const rawDetail = await api(`/v1/articles/${summary.id}`);
        if (rawDetail === null) {
          missing.add(summary.id);
          await save({ missing_ids: [...missing] });
          remaining--; progress = true; continue;
        }
        const article = detailSchema.parse(rawDetail?.article ?? rawDetail?.data ?? rawDetail);
        const old = stored.data?.find(row => row.id === article.id);
        const previous = [...new Set([...(old?.previous_slugs || []), ...(old && old.slug !== article.slug ? [old.slug] : [])])].filter(slug => slug !== article.slug);
        const { error } = await db.from('blg_articles').upsert({ id: article.id, slug: article.slug, previous_slugs: previous, title: article.title, meta_description: article.meta_description || null, hero_image_url: article.hero_image_url || null, language_code: article.languageCode || null, content_html: cleanArticleHtml(article.content_html), json_ld: article.jsonLd ?? null, faq_json_ld: article.faqJsonLd ?? null, article_created_at: article.created_at || null, article_updated_at: article.updated_at || null, synced_at: new Date().toISOString() } as DatabaseArticle, { onConflict: 'id' });
        if (error) throw new Error('Unable to store article');
        synced++; remaining--; progress = true;
      }
      if (remaining > 0) break;
      if (articles.length < 50) {
        complete = true;
        await save({ list_complete: true, list_offset: 0, missing_ids: [] });
        break;
      }
      offset += 50;
      await save({ list_offset: offset });
      progress = true;
    }
  } catch (error) {
    failure = error instanceof z.ZodError ? 'unexpected_provider_format' : error instanceof Error ? error.message : 'Import interrupted';
  } finally {
    await save({ lease_until: null });
  }
  const done = complete && remaining === 0;
  let queued = false;
  if (!done && progress && !limited && !failure && chain < 25) {
    // Durable pg_net queue replaces runtime-specific waitUntil: dispatch survives this request.
    const result = await db.rpc('blg_enqueue_sync', { chain_number: chain + 1 });
    if (result.error) failure = 'Unable to queue continuation';
    else queued = true;
  }
  return { synced, remaining, listComplete: complete, done, queued, ...(failure ? { error: failure } : {}) };
}
import type { Database } from '@/integrations/supabase/types';
type DatabaseArticle = Database['public']['Tables']['blg_articles']['Insert'];
