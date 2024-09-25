import axiosInstance from "@/lib/axiosInstance";
import { RepairType } from "@/types/Repair";

export const fetchRepairs = async () => {
  return (await axiosInstance.get<RepairType[]>("/repairs")).data;
};

export const loginUser = async (credentials: {
  email: string;
  password: string;
}) => {
  return (await axiosInstance.post("/auth/login", credentials)).data;
};

// export const fetchUser = async (token: string | null) => {
//   return (
//     await axiosInstance.get("", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//   ).data;
// };
