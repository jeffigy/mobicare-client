"use client";

import { useMutation } from "@tanstack/react-query";
import { loginUser, logOutUser, refreshUser } from "./api";
import { useStore } from "@/store/store";
import { useRouter } from "next/navigation";

export function useLoginMutation() {
  const router = useRouter();
  const { setCredentials } = useStore();
  return useMutation({
    mutationFn: (credentials: { email: string; password: string }) =>
      loginUser(credentials),
    onSuccess: (data) => {
      setCredentials(data.accessToken);
      router.push("/dashboard/home");
    },
  });
}

export function useLogoutMutation() {
  const router = useRouter();
  const { clearCredentials } = useStore();

  return useMutation({
    mutationFn: () => logOutUser(),
    onSuccess: () => {
      clearCredentials();
      router.replace("/");
    },
  });
}

export function useRefreshMutation() {
  const { setCredentials } = useStore();
  return useMutation({
    mutationFn: () => refreshUser(),
    onSuccess: (data) => {
      setCredentials(data.accessToken);
    },
  });
}
