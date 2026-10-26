import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import { listBlogArticles } from '@/lib/blog.functions';
import { BlogShell } from '@/components/BlogShell';
const title = 'Notary Blog - Virginia Notary';
const description = 'Notarization insights, practical document guides and answers to your notary questions from Virginia Notary.';
export const Route = createFileRoute('/blog/')({
  loader: () => listBlogArticles(),
  head: () => ({ meta: [{ title }, { name: 'description', content: description }, { property: 'og:title', content: title }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { property: 'og:url', content: 'https://virginia-notary.com/blog' }, { name: 'twitter:card', content: 'summary_large_image' }], links: [{ rel: 'canonical', href: 'https://virginia-notary.com/blog' }] }),
  component: BlogIndex,
  errorComponent: () => <BlogShell><p role="alert" className="max-w-3xl mx-auto p-8">The blog is temporarily unavailable. Please try again shortly.</p></BlogShell>,
  notFoundComponent: () => <BlogShell><p className="p-8">Blog not found.</p></BlogShell>,
});
function BlogIndex() {
  const articles = Route.useLoaderData();
  return <BlogShell><section className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16">
    <p className="text-sm font-semibold uppercase text-brand-action mb-3">Virginia Notary</p>
    <h1 className="text-4xl sm:text-5xl font-extrabold">Notary Blog</h1>
    <p className="text-muted-foreground text-lg mt-5 max-w-2xl">Insights and answers for your next notarization.</p>
    {articles.length === 0 ? <p className="py-16 text-muted-foreground">No articles yet. Please check back soon.</p> : <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
      {articles.map((article, index) => <article key={article.id} lang={article.language_code || undefined} className="border border-border rounded-lg overflow-hidden bg-card flex flex-col">
        <Link to="/blog/$slug" params={{ slug: article.slug }} className="block h-full group">
          {article.hero_image_url && <img src={article.hero_image_url} alt={article.title} loading={index === 0 ? 'eager' : 'lazy'} decoding="async" className="aspect-[16/10] object-cover w-full" />}
          <div className="p-6">
            {article.article_created_at && <time dateTime={article.article_created_at} className="text-xs text-muted-foreground">{new Date(article.article_created_at).toLocaleDateString('en-US', { timeZone: 'UTC', month: 'long', day: 'numeric', year: 'numeric' })}</time>}
            <h2 className="text-xl font-bold leading-snug mt-3 group-hover:text-brand-action">{article.title}</h2>
            {article.meta_description && <p className="text-sm text-muted-foreground leading-relaxed mt-3">{article.meta_description}</p>}
            <span className="inline-flex items-center gap-2 text-brand-action font-semibold text-sm mt-5">Read article <ArrowRight className="h-4 w-4" /></span>
          </div>
        </Link>
      </article>)}
    </div>}
  </section></BlogShell>;
}
