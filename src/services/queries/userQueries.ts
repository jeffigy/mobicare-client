import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../api/userApi";

export function useFetchUser(email: string) {
  return useQuery({
    queryKey: ["user"],
    queryFn: () => fetchUser(email),
  });
}
