import { useQuery } from "@tanstack/react-query";
import { fetchRepairs } from "./repairApi";

export function useRepairs() {
  return useQuery({
    queryKey: ["repairs"],
    queryFn: () => fetchRepairs(),
    refetchInterval: 30000,
  });
}
