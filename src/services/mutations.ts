import { useMutation } from "@tanstack/react-query";
import { loginUser } from "./api";
import { useStore } from "@/store/store";
import { useRouter } from "next/navigation";

export function useLoginMutation() {
  const router = useRouter();
  const { login } = useStore();
  return useMutation({
    mutationFn: (credentials: { email: string; password: string }) =>
      loginUser(credentials),
    onSuccess: (data) => {
      login(data.accessToken);
      router.push("/dashboard/home");
    },
  });
}
