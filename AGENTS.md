# Architecture rules
- Keep essential Tailwind styles render-blocking and load optional animation styles separately so first paint remains styled.
- Serve optimized image and font variants through Lovable asset pointers rather than embedding binary files in the repository.
- Load quote dialogs only when opened and the cookie notice after hydration; keep static page content server-rendered so SEO and section navigation remain reliable.
- Blog routes use database-only server-function loaders because page views must never spend the provider API budget.
- Blog sync uses a service-role-only atomic lease and durable pg_net continuation queue with a private database nonce because scheduled writes must not trust publishable credentials and continuations must survive request completion.