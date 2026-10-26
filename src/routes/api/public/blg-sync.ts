import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';
export const Route = createFileRoute('/api/public/blg-sync')({
  server: { handlers: { POST: async ({ request }) => {
    const nonce = z.string().uuid().safeParse(request.headers.get('X-BLG-Invocation'));
    if (!nonce.success) return Response.json({ error: 'Unauthorized' }, { status: 401 });
    const body = z.object({ chain: z.number().int().min(0).max(25).default(0) }).safeParse(await request.json().catch(() => null));
    if (!body.success) return Response.json({ error: 'Invalid request' }, { status: 400 });
    const { supabaseAdmin } = await import('@/integrations/supabase/client.server');
    const check = await supabaseAdmin.from('blg_sync_state').select('id').eq('id', 1).eq('invocation_nonce', nonce.data).maybeSingle();
    if (check.error || !check.data) return Response.json({ error: 'Unauthorized' }, { status: 401 });
    const { syncBlog } = await import('@/lib/blog-sync.server');
    try { return Response.json(await syncBlog(nonce.data, body.data.chain), { headers: { 'Cache-Control': 'no-store' } }); }
    catch { return Response.json({ error: 'Import temporarily unavailable' }, { status: 503 }); }
  } } },
});
