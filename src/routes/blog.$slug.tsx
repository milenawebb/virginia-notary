import { createFileRoute, Link, notFound, redirect } from '@tanstack/react-router';
import { ArrowLeft } from 'lucide-react';
import { getBlogArticle } from '@/lib/blog.functions';
import { articleSchema } from '@/lib/blog-content';
import { BlogShell } from '@/components/BlogShell';
import blogCss from '@/blog.css?url';
export const Route = createFileRoute('/blog/$slug')({
  loader: async ({ params }) => {
    const result = await getBlogArticle({ data: { slug: params.slug } });
    if (result.redirectSlug) throw redirect({ to: '/blog/$slug', params: { slug: result.redirectSlug }, statusCode: 301 });
    if (!result.article) throw notFound();
    return result.article;
  },
  head: ({ loaderData: article }) => {
    if (!article) return { meta: [{ title: 'Article unavailable - Virginia Notary' }, { name: 'robots', content: 'noindex' }, { name: 'description', content: 'This notary article is unavailable.' }, { property: 'og:title', content: 'Article unavailable - Virginia Notary' }, { property: 'og:description', content: 'This notary article is unavailable.' }, { property: 'og:type', content: 'article' }, { name: 'twitter:card', content: 'summary_large_image' }] };
    const url = `https://virginia-notary.com/blog/${encodeURIComponent(article.slug)}`;
    const title = `${article.title} - Virginia Notary`;
    const description = article.meta_description || article.title;
    const image = article.hero_image_url?.startsWith('https://') ? article.hero_image_url : null;
    return {
      meta: [{ title }, { name: 'description', content: description }, { property: 'og:title', content: title }, { property: 'og:description', content: description }, { property: 'og:type', content: 'article' }, { property: 'og:url', content: url }, { name: 'twitter:card', content: 'summary_large_image' }, { name: 'twitter:title', content: title }, { name: 'twitter:description', content: description }, ...(image ? [{ property: 'og:image', content: image }, { name: 'twitter:image', content: image }] : [])],
      links: [{ rel: 'canonical', href: url }, { rel: 'stylesheet', href: blogCss }],
      scripts: [article.json_ld, article.faq_json_ld].filter(data => data !== null).map(data => ({ type: 'application/ld+json', children: JSON.stringify(articleSchema(data, url)).replace(/</g, '\\u003c') })),
    };
  },
  component: BlogArticle,
  notFoundComponent: () => <BlogShell><div className="max-w-3xl mx-auto p-8"><h1 className="text-3xl font-bold mb-6">Article not found</h1><Link to="/blog" className="text-brand-action">Back to blog</Link></div></BlogShell>,
  errorComponent: () => <BlogShell><p role="alert" className="p-8">This article is temporarily unavailable. Please try again shortly.</p></BlogShell>,
});
function BlogArticle() {
  const article = Route.useLoaderData();
  return <BlogShell><div className="max-w-3xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14">
    <Link to="/blog" className="inline-flex gap-2 items-center text-brand-action font-semibold text-sm mb-8"><ArrowLeft className="h-4 w-4" />Back to blog</Link>
    <article lang={article.language_code || undefined} className="blog-prose" dangerouslySetInnerHTML={{ __html: article.content_html || '' }} />
  </div></BlogShell>;
}
