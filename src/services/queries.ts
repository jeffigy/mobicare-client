import { useQuery } from "@tanstack/react-query";
import { fetchRepairs } from "./api";

export function useRepairs() {
  return useQuery({
    queryKey: ["repairs"],
    queryFn: () => fetchRepairs(),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
}
