import axiosInstance from "@/lib/axiosInstance";
import { UserType } from "@/types/User";

export const fetchUsers = async () => {
  return (await axiosInstance.get<UserType[]>("/users")).data;
};
