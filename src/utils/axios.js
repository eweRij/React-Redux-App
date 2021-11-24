import axios from "axios";

import { getToken } from "./auth";

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

export default instance;
