import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export function usePortfolioViews() {
  const [viewCount, setViewCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const trackAndFetchViews = async () => {
      try {
        // Add a new view
        await supabase.from("portfolio_views").insert({});

        // Fetch total count
        const { count, error } = await supabase
          .from("portfolio_views")
          .select("*", { count: "exact", head: true });

        if (error) {
          console.error("Error fetching view count:", error);
        } else {
          setViewCount(count);
        }
      } catch (err) {
        console.error("Error tracking view:", err);
      } finally {
        setLoading(false);
      }
    };

    trackAndFetchViews();
  }, []);

  return { viewCount, loading };
}
