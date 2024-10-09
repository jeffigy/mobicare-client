import { useMutation } from "@tanstack/react-query";
import { useStore } from "@/store/store";
import { loginUser, logOutUser, refreshUser } from "../api/authApi";

export function useLoginMutation() {
  const { setCredentials } = useStore();

  return useMutation({
    mutationFn: (credentials: { email: string; password: string }) =>
      loginUser(credentials),
    onSuccess: (data) => {
      setCredentials(data.accessToken);
    },
  });
}

export function useLogoutMutation() {
  const { clearCredentials } = useStore();

  return useMutation({
    mutationFn: () => logOutUser(),
    onSuccess: () => {
      clearCredentials();
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
