import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const onRequest = async (config: InternalAxiosRequestConfig) => {
  // eslint-disable-next-line
  console.log(config);
  if (config.url?.includes("token")) {
    return config;
  }
  const token = cookies.get("ob_");
  if (token) {
    config.headers.set("Authorization", `Bearer ${token}`);
  }

  return config;
};

const onResponse = async (response: AxiosResponse) => {
  // eslint-disable-next-line
  console.log(response);
  if (response.config.url?.includes("token")) {
    cookies.set("ob_", response.data.access_token);
  }

  return response;
};

instance.interceptors.request.use(onRequest);
instance.interceptors.response.use(onResponse);

export default instance;
