import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface DailyView {
  view_date: string;
  view_count: number;
}

interface HourlyView {
  view_hour: string;
  view_count: number;
}

interface AnalyticsData {
  totalViews: number;
  todayViews: number;
  weekViews: number;
  monthViews: number;
  dailyViews: DailyView[];
  hourlyViews: HourlyView[];
}

export function useAnalytics() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        // Fetch total count
        const { count: totalViews, error: countError } = await supabase
          .from("portfolio_views")
          .select("*", { count: "exact", head: true });

        if (countError) throw countError;

        // Fetch daily views
        const { data: dailyData, error: dailyError } = await supabase
          .from("views_by_day")
          .select("*")
          .limit(30);

        if (dailyError) throw dailyError;

        // Fetch hourly views
        const { data: hourlyData, error: hourlyError } = await supabase
          .from("views_by_hour")
          .select("*");

        if (hourlyError) throw hourlyError;

        // Calculate period totals
        const today = new Date().toISOString().split("T")[0];
        const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0];
        const monthAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0];

        const dailyViews = (dailyData as DailyView[]) || [];
        const todayViews = dailyViews.find(d => d.view_date === today)?.view_count || 0;
        const weekViews = dailyViews
          .filter(d => d.view_date >= weekAgo)
          .reduce((sum, d) => sum + d.view_count, 0);
        const monthViews = dailyViews
          .filter(d => d.view_date >= monthAgo)
          .reduce((sum, d) => sum + d.view_count, 0);

        setData({
          totalViews: totalViews || 0,
          todayViews,
          weekViews,
          monthViews,
          dailyViews,
          hourlyViews: (hourlyData as HourlyView[]) || [],
        });
      } catch (err) {
        console.error("Error fetching analytics:", err);
        setError("Failed to load analytics data");
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  return { data, loading, error };
}
