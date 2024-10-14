import axiosInstance from "@/lib/axiosInstance";
import { UserFormType, UserType } from "@/types/User";

export const fetchUsers = async () => {
  return (await axiosInstance.get<UserType[]>("/users")).data;
};

export const addNewUser = async (data: UserFormType) => {
  return (await axiosInstance.post("/users", data)).data;
};

export const editUser = async (data: UserFormType) => {
  return (await axiosInstance.patch("/users", data)).data;
};

export const deleteUser = async (id: string) => {
  return (await axiosInstance.delete(`/users/${id}`)).data;
};
