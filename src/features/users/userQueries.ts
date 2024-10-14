import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "./userApi";

export function useFetchUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => fetchUsers(),
    refetchInterval: 30000,
  });
}
