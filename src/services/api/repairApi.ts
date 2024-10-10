import axiosInstance from "@/lib/axiosInstance";
import { RepairFormType, RepairType } from "@/types/Repair";

export const fetchRepairs = async () => {
  return (await axiosInstance.get<RepairType[]>("/repairs")).data;
};

export const AddNewRepair = async (data: RepairFormType) => {
  return (await axiosInstance.post("/repairs", data)).data;
};

export const EditRepair = async (data: RepairFormType) => {
  return (await axiosInstance.patch("/repairs", data)).data;
};
