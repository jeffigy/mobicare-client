// import { useStore } from "@/store/store";
import axios from "axios";
// const { token } = useStore();
const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    "Content-Type": "application/json",
    // Authorization: token ? `Bearer ${token}` : "",
  },
  withCredentials: true,
});

export default axiosInstance;
