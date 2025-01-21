import axios from "axios";
import Cookies from "js-cookie";

const ClientSide = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API,
});

ClientSide.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token");
    if (token && config.headers) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default ClientSide;
