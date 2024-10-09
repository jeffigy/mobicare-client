import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AddNewRepair } from "../api/repairApi";
import { NewRepairFormType } from "@/types/Repair";

export function useAddNewRepairMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: NewRepairFormType) => AddNewRepair(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["repairs"],
        type: "active",
      });
    },
  });
}
