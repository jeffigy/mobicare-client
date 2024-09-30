import { useStore } from "@/store/store";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const { token } = useStore.getState();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const { token, setCredentials, clearCredentials } = useStore();

    if (error.response?.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;

      if (token) {
        try {
          const { data } = await axiosInstance.get("/auth/refresh");

          setCredentials(data.accessToken);

          originalRequest.headers.Authorization = `Bearer ${data.token}`;
          return axiosInstance(originalRequest);
        } catch (refreshError) {
          console.log("Session expired");
          clearCredentials();
          return Promise.reject(refreshError);
        }
      }
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
