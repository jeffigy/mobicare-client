import axiosInstance from "@/lib/axiosInstance";
import { NewRepairFormType, RepairType } from "@/types/Repair";

export const fetchRepairs = async () => {
  return (await axiosInstance.get<RepairType[]>("/repairs")).data;
};

export const AddNewRepair = async (data: NewRepairFormType) => {
  return (await axiosInstance.post("/repairs", data)).data;
};
