import { test, expect } from 'bun:test';
import { BLOG_CALL_LIMIT, BLOG_DETAIL_LIMIT, BLOG_GAP_MS, cleanArticleHtml, articleSchema } from './blog-content';
test('import waits at least 2100 milliseconds between calls', () => expect(BLOG_GAP_MS).toBe(2100));
test('import caps total API calls at 25', () => expect(BLOG_CALL_LIMIT).toBe(25));
test('import caps detail API calls at 20', () => expect(BLOG_DETAIL_LIMIT).toBe(20));
test('stored content removes executable content but preserves allowed video embeds', () => {
  const cleaned = cleanArticleHtml('<script type="application/ld+json">{}</script><img onerror="bad()" src="javascript:bad()"><iframe src="https://www.youtube.com/embed/a"></iframe><iframe src="https://bad.example"></iframe><object>bad</object>');
  expect(cleaned).not.toContain('<script');
  expect(cleaned).not.toContain('onerror');
  expect(cleaned).not.toContain('javascript:');
  expect(cleaned).not.toContain('bad.example');
  expect(cleaned).not.toContain('<object');
  expect(cleaned).toContain('sandbox="allow-scripts allow-same-origin allow-presentation"');
});
test('schema updates nested article and final breadcrumb while preserving brand URLs', () => {
  const url = 'https://virginia-notary.com/blog/example';
  const source = { '@graph': [{ '@type': 'Article', url: 'https://virginia-notary.com', author: { url: 'https://virginia-notary.com' } }, { '@type': 'BreadcrumbList', itemListElement: [{ item: 'https://virginia-notary.com' }] }] };
  const result = articleSchema(source, url) as typeof source;
  expect(result['@graph'][0].url).toBe(url);
  expect(result['@graph'][0].author?.url).toBe('https://virginia-notary.com');
  expect(result['@graph'][1].itemListElement?.[0].item).toBe(url);
});