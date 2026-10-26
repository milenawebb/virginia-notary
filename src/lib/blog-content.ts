export function cleanArticleHtml(html: string): string {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script\s*>/gi, '')
    .replace(/<(object|embed|base)\b[^>]*>[\s\S]*?<\/\1\s*>/gi, '')
    .replace(/<\/?(?:object|embed|base)\b[^>]*>/gi, '')
    .replace(/\s+(?:on[\w:-]+|srcdoc)\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, '')
    .replace(/\s+(?:href|src|xlink:href)\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, (attribute, value: string) => {
      const decoded = value.replace(/^['"]|['"]$/g, '').replace(/&#x([\da-f]+);?/gi, (_, n) => String.fromCharCode(parseInt(n, 16))).replace(/&#(\d+);?/g, (_, n) => String.fromCharCode(Number(n))).replace(/&colon;/gi, ':').replace(/[\u0000-\u0020]/g, '');
      return /^(javascript|data):/i.test(decoded) ? '' : attribute;
    })
    .replace(/<iframe\b([^>]*)>[\s\S]*?<\/iframe\s*>/gi, (_, attrs: string) => {
      const src = attrs.match(/\bsrc\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i);
      try {
        const url = new URL(src?.[1] || src?.[2] || src?.[3] || '');
        const host = url.hostname.replace(/^www\./, '');
        if (url.protocol !== 'https:' || !['youtube.com', 'youtube-nocookie.com', 'vimeo.com', 'player.vimeo.com'].includes(host)) return '';
        return `<iframe${attrs.replace(/\s+sandbox\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, '')} sandbox="allow-scripts allow-same-origin allow-presentation"></iframe>`;
      } catch { return ''; }
    });
}

export function articleSchema(input: unknown, url: string): unknown {
  if (Array.isArray(input)) return input.map(item => articleSchema(item, url));
  if (!input || typeof input !== 'object') return input;
  const node = Object.fromEntries(Object.entries(input).map(([key, value]) => [key, ['author', 'publisher'].includes(key) ? value : articleSchema(value, url)]));
  const types = Array.isArray(node['@type']) ? node['@type'] : [node['@type']];
  if (types.some(type => ['Article', 'BlogPosting', 'NewsArticle'].includes(String(type)))) {
    const original = node.url;
    node.url = url;
    node.mainEntityOfPage = { '@type': 'WebPage', '@id': url };
    if (typeof node['@id'] === 'string' && (node['@id'] === original || /#(?:article|blogposting)$/i.test(node['@id']))) node['@id'] = `${url}#article`;
  }
  if (types.includes('BreadcrumbList') && Array.isArray(node.itemListElement)) {
    const last = node.itemListElement.at(-1);
    if (last && typeof last === 'object') last.item = url;
  }
  return node;
}
export const BLOG_CALL_LIMIT = 25;
export const BLOG_DETAIL_LIMIT = 20;
export const BLOG_GAP_MS = 2100;
