import { useQuery } from "@tanstack/react-query";
import {
  fetchRepairs,
  // , fetchUser
} from "./api";

export function useRepairs() {
  return useQuery({
    queryKey: ["repairs"],
    queryFn: () => fetchRepairs(),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
}

// export function useFetchUser(token: string | null) {
//   return useQuery({
//     enabled: !!token, // will only run if there is token
//     queryKey: ["user"],
//     queryFn: () => fetchUser(token!),
//   });
// }
