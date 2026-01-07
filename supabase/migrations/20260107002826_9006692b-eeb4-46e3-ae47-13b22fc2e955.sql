-- Create a simple table to track portfolio views
CREATE TABLE public.portfolio_views (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  viewed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS but allow anyone to insert (public counter)
ALTER TABLE public.portfolio_views ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert a view (public tracking)
CREATE POLICY "Anyone can add a view" 
ON public.portfolio_views 
FOR INSERT 
WITH CHECK (true);

-- Allow anyone to count views (public read)
CREATE POLICY "Anyone can count views" 
ON public.portfolio_views 
FOR SELECT 
USING (true);