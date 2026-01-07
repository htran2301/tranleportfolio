-- Drop existing views
DROP VIEW IF EXISTS public.views_by_day;
DROP VIEW IF EXISTS public.views_by_hour;

-- Recreate with security invoker (respects RLS of querying user)
CREATE VIEW public.views_by_day 
WITH (security_invoker = true) AS
SELECT 
  DATE(viewed_at) as view_date,
  COUNT(*) as view_count
FROM public.portfolio_views
GROUP BY DATE(viewed_at)
ORDER BY view_date DESC;

CREATE VIEW public.views_by_hour 
WITH (security_invoker = true) AS
SELECT 
  DATE_TRUNC('hour', viewed_at) as view_hour,
  COUNT(*) as view_count
FROM public.portfolio_views
WHERE viewed_at >= now() - INTERVAL '7 days'
GROUP BY DATE_TRUNC('hour', viewed_at)
ORDER BY view_hour DESC;