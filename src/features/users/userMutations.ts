import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addNewUser, editUser } from "./userApi";
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

export function useEditUserMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: UserFormType) => editUser(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
  });
}
