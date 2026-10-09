# Architecture rules
- Keep essential Tailwind styles render-blocking and load optional animation styles separately so first paint remains styled.
- Serve optimized image and font variants through Lovable asset pointers rather than embedding binary files in the repository.
- Load quote dialogs only when opened and the cookie notice after hydration; keep static page content server-rendered so SEO and section navigation remain reliable.