import axios from "axios";

import { getToken } from "./auth";

import { toast } from "react-toastify";
const { REACT_APP_API_PORT } = process.env;
const instance = axios.create({
  baseURL: `http://localhost:${REACT_APP_API_PORT}`,
});

instance.interceptors.request.use((config) => {
  const token = getToken();

  if (token) {
    return {
      ...config,
      headers: { ...config.headers, authorization: `Bearer ${token}` },
    };
  } else {
    return config;
  }
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!axios.isCancel(error)) {
      if (error.response) {
        const { data, status, headers } = error.response;
        toast.error(JSON.stringify({ data, status, headers }, undefined, 2));
      } else if (error.request) {
        toast.error(JSON.stringify(error.request, undefined, 2));
      } else {
        toast.error(JSON.stringify(error.message, undefined, 2));
      }
    }

    return Promise.reject(error);
  }
);

// export const getCanceller = () => axios.CancelToken.source();

export default instance;
