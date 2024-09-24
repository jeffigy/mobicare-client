"use client";

import { fetchRepairs } from "@/services/api";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React, { useEffect } from "react";

const queryClient = new QueryClient({});

const Provider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    async function prefetch() {
      await queryClient.prefetchQuery({
        queryKey: ["repairs"],
        queryFn: () => fetchRepairs(),
      });
    }
    prefetch();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default Provider;
