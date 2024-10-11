import axiosInstance from "@/lib/axiosInstance";
import { UserType } from "@/types/User";

export const fetchUser = async (email: string) => {
  return (
    await axiosInstance.get<UserType>("/auth/profile", {
      params: {
        email,
      },
    })
  ).data;
};
