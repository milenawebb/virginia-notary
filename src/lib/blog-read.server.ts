import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/integrations/supabase/types';

export function publicBlogClient() {
  const url = process.env['SUPABASE_URL'];
  const key = process.env['SUPABASE_PUBLISHABLE_KEY'] || process.env['SUPABASE_ANON_KEY'];
  if (!url || !key) throw new Error('Blog temporarily unavailable');
  return createClient<Database>(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: { fetch: (input, init) => {
      const headers = new Headers(init?.headers);
      if (key.startsWith('sb_') && headers.get('Authorization') === `Bearer ${key}`) headers.delete('Authorization');
      headers.set('apikey', key);
      return fetch(input, { ...init, headers });
    } },
  });
}
export async function readBlogArticles() {
  const db = publicBlogClient();
  const rows = [];
  for (let offset = 0; ; offset += 1000) {
    const { data, error } = await db.from('blg_articles').select('id,slug,title,meta_description,hero_image_url,language_code,article_created_at,article_updated_at').order('article_created_at', { ascending: false, nullsFirst: false }).order('id', { ascending: false }).range(offset, offset + 999);
    if (error) throw new Error('Blog temporarily unavailable');
    rows.push(...data);
    if (data.length < 1000) break;
  }
  return rows;
}