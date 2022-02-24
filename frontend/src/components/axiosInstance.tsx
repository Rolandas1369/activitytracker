import axios from "axios";
import { config } from "../components/Constants";

const axiosInstance = axios.create({
  baseURL: config.url.API_URL,

  headers: { Authorization: `JWT ${localStorage.getItem("access_token")}` },
});

export default axiosInstance;
