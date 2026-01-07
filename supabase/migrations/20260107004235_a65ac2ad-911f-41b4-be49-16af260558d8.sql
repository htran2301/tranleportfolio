-- Create role enum
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create user_roles table
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

-- Enable RLS
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- RLS policy: only admins can view roles
CREATE POLICY "Admins can view all roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Create a view for daily analytics
CREATE OR REPLACE VIEW public.views_by_day AS
SELECT 
  DATE(viewed_at) as view_date,
  COUNT(*) as view_count
FROM public.portfolio_views
GROUP BY DATE(viewed_at)
ORDER BY view_date DESC;

-- Create a view for hourly analytics (last 7 days)
CREATE OR REPLACE VIEW public.views_by_hour AS
SELECT 
  DATE_TRUNC('hour', viewed_at) as view_hour,
  COUNT(*) as view_count
FROM public.portfolio_views
WHERE viewed_at >= now() - INTERVAL '7 days'
GROUP BY DATE_TRUNC('hour', viewed_at)
ORDER BY view_hour DESC;