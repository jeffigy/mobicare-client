import axiosInstance from "@/lib/axiosInstance";
import { RepairType } from "@/types/Repair";
import { UserType } from "@/types/User";

export const fetchRepairs = async () => {
  return (await axiosInstance.get<RepairType[]>("/repairs")).data;
};

export const loginUser = async (credentials: {
  email: string;
  password: string;
}) => {
  return (await axiosInstance.post("/auth/login", credentials)).data;
};

export const fetchUser = async (email: string) => {
  return (
    await axiosInstance.get<UserType>("/auth/profile", {
      params: {
        email,
      },
    })
  ).data;
};

export const logOutUser = async () => {
  return (await axiosInstance.post("/auth/logout")).data;
};
