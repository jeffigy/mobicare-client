import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addNewUser } from "./userApi";
import { UserFormType } from "@/types/User";

export function useAddNewUserMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: UserFormType) => addNewUser(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
  });
}
