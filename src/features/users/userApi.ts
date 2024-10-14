import axiosInstance from "@/lib/axiosInstance";
import { UserFormType, UserType } from "@/types/User";

export const fetchUsers = async () => {
  return (await axiosInstance.get<UserType[]>("/users")).data;
};

export const addNewUser = async (data: UserFormType) => {
  return (await axiosInstance.post("/users", data)).data;
};
