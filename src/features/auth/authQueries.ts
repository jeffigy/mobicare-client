import { useQuery } from "@tanstack/react-query";
import { fetchUserProfile } from "./authApi";

export function useFetchUserProfile(email: string) {
  return useQuery({
    queryKey: ["user"],
    queryFn: () => fetchUserProfile(email),
  });
}
