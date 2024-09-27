import { useQuery } from "@tanstack/react-query";
import { fetchRepairs, fetchUser } from "./api";

export function useRepairs() {
  return useQuery({
    queryKey: ["repairs"],
    queryFn: () => fetchRepairs(),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
}

export function useFetchUser(email: string) {
  return useQuery({
    queryKey: ["user"],
    queryFn: () => fetchUser(email),
  });
}
