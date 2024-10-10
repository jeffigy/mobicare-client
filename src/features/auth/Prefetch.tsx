"use client";

import { fetchRepairs } from "@/services/api/repairApi";
import { queryClient } from "@/store/provider";
import { useEffect } from "react";

const Prefetch = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    async function prefetch() {
      await queryClient.prefetchQuery({
        queryKey: ["repairs"],
        queryFn: () => fetchRepairs(),
      });
    }
    prefetch();
  }, []);

  return <>{children}</>;
};

export default Prefetch;
