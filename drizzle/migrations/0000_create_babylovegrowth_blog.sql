CREATE TABLE public.blg_articles (
 id bigint PRIMARY KEY, slug text UNIQUE NOT NULL, previous_slugs text[] NOT NULL DEFAULT '{}', title text NOT NULL,
 meta_description text, hero_image_url text, language_code text, content_html text, json_ld jsonb, faq_json_ld jsonb,
 article_created_at timestamptz, article_updated_at timestamptz, synced_at timestamptz DEFAULT now()
);
GRANT SELECT ON public.blg_articles TO anon, authenticated;
GRANT ALL ON public.blg_articles TO service_role;
ALTER TABLE public.blg_articles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public blog reads" ON public.blg_articles FOR SELECT TO public USING (true);
CREATE INDEX blg_articles_slug_idx ON public.blg_articles(slug);
CREATE INDEX blg_articles_created_idx ON public.blg_articles(article_created_at DESC);
CREATE TABLE public.blg_sync_state (
 id int PRIMARY KEY DEFAULT 1 CHECK (id = 1), list_offset int NOT NULL DEFAULT 0, list_complete boolean NOT NULL DEFAULT false,
 last_run_at timestamptz, lease_until timestamptz, next_allowed_at timestamptz,
 invocation_nonce uuid NOT NULL DEFAULT gen_random_uuid(), missing_ids bigint[] NOT NULL DEFAULT '{}', rate_limit_streak int NOT NULL DEFAULT 0
);
GRANT ALL ON public.blg_sync_state TO service_role;
ALTER TABLE public.blg_sync_state ENABLE ROW LEVEL SECURITY;
CREATE FUNCTION public.blg_claim_sync(nonce uuid) RETURNS SETOF public.blg_sync_state LANGUAGE sql SECURITY DEFINER SET search_path = public AS $$
 UPDATE public.blg_sync_state SET lease_until = now() + interval '3 minutes', last_run_at = now(), list_complete = false
 WHERE id = 1 AND invocation_nonce = nonce AND (lease_until IS NULL OR lease_until < now()) RETURNING *;
$$;
REVOKE ALL ON FUNCTION public.blg_claim_sync(uuid) FROM public, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.blg_claim_sync(uuid) TO service_role;
CREATE EXTENSION IF NOT EXISTS pg_cron;
CREATE EXTENSION IF NOT EXISTS pg_net;
CREATE FUNCTION public.blg_enqueue_sync(chain_number int DEFAULT 0) RETURNS bigint LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE nonce uuid; request_id bigint;
BEGIN
 SELECT invocation_nonce INTO nonce FROM public.blg_sync_state WHERE id = 1;
 SELECT net.http_post(url := 'https://virginia-notary.com/api/public/blg-sync', headers := jsonb_build_object('Content-Type', 'application/json', 'X-BLG-Invocation', nonce::text), body := jsonb_build_object('chain', chain_number), timeout_milliseconds := 600000) INTO request_id;
 RETURN request_id;
END;
$$;
REVOKE ALL ON FUNCTION public.blg_enqueue_sync(int) FROM public, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.blg_enqueue_sync(int) TO service_role;