import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AddNewRepair, EditRepair } from "../api/repairApi";
import { RepairFormType } from "@/types/Repair";

export function useAddNewRepairMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: RepairFormType) => AddNewRepair(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["repairs"],
        type: "active",
      });
    },
  });
}

export function useEditRepairMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: RepairFormType) => EditRepair(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["repairs"],
        type: "active",
      });
    },
  });
}
