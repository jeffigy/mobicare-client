import { useQuery } from "@tanstack/react-query";
import { fetchRepairs, fetchUser } from "./api";

export function useRepairs() {
  return useQuery({
    queryKey: ["repairs"],
    queryFn: () => fetchRepairs(),
    refetchInterval: 5000,
  });
}

export function useFetchUser(email: string) {
  return useQuery({
    queryKey: ["user"],
    queryFn: () => fetchUser(email),
  });
}
