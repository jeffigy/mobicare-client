import axiosInstance from "@/lib/axiosInstance";

export const loginUser = async (credentials: {
  email: string;
  password: string;
}) => {
  return (await axiosInstance.post("/auth/login", credentials)).data;
};

export const logOutUser = async () => {
  return (await axiosInstance.post("/auth/logout")).data;
};

export const refreshUser = async () => {
  return (await axiosInstance.get("/auth/refresh")).data;
};
