import { useQuery } from "@tanstack/react-query";
import { fetchRepairs } from "../api/repairApi";

export function useRepairs() {
  return useQuery({
    queryKey: ["repairs"],
    queryFn: () => fetchRepairs(),
    refetchInterval: 30000,
  });
}
