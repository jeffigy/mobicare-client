import axiosInstance from "@/lib/axiosInstance";
import { RepairType } from "@/types/Repair";

export const fetchRepairs = async () => {
  return (await axiosInstance.get<RepairType[]>("/repairs")).data;
};

// export const loginUser = async (credentials: {
//   email: string;
//   password: string;
// }) => {
//   const response = await axiosInstance.post("/auth/login", credentials);
//   return response.data;
// };
