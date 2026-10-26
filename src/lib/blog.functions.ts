import { createServerFn } from '@tanstack/react-start';
import { z } from 'zod';
import { publicBlogClient, readBlogArticles } from './blog-read.server';
export const listBlogArticles = createServerFn({ method: 'GET' }).handler(async () => {
  return readBlogArticles();
});
export const getBlogArticle = createServerFn({ method: 'GET' })
  .inputValidator(z.object({ slug: z.string().min(1).max(500) }))
  .handler(async ({ data }) => {
    const db = publicBlogClient();
    const current = await db.from('blg_articles').select('*').eq('slug', data.slug).maybeSingle();
    if (current.error) throw new Error('Article temporarily unavailable');
    if (current.data) return { article: current.data, redirectSlug: null };
    const old = await db.from('blg_articles').select('slug').contains('previous_slugs', [data.slug]).limit(1).maybeSingle();
    if (old.error) throw new Error('Article temporarily unavailable');
    return { article: null, redirectSlug: old.data?.slug || null };
  });
