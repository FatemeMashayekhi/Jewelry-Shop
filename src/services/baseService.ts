import axios from "axios";
import { ADMIN_LOGIN_URL, BASE_URL, GENERATE_ACCESS_TOKEN_URL } from "./api";
import { useContext } from "react";
import { DataContext } from "../context/context";

axios.defaults.baseURL = BASE_URL;

axios.interceptors.request.use((req) => {
  if (req.url === GENERATE_ACCESS_TOKEN_URL) {
    const token = localStorage.getItem("refreshToken");
    req.headers.refreshToken = token;
  } else if (req.url !== ADMIN_LOGIN_URL) {
    const token = localStorage.getItem("accessToken");
    req.headers.token = token;
  }

  return req;
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response.status !== 401) {
      return Promise.reject(error);
    }

    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      originalRequest.url === GENERATE_ACCESS_TOKEN_URL
    ) {
      return Promise.reject(error);
    }

    if (!originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const { postGenerateAccessToken } = useContext(DataContext);
        const newAccessToken = await postGenerateAccessToken?.mutateAsync();
        originalRequest.headers.token = newAccessToken;
        const res = await axios.request(originalRequest);
        return Promise.resolve(res);
      } catch (e) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        console.log(e);
        return Promise.reject(e);
      }
    }
  }
);

export default axios;

import axios, { AxiosError } from "axios";
import { baseURL } from "../Constant/BaseURLs/BaseURLs";
import authRefreshToken from "../api/authRefreshToken";

const authRefreshToken = (refresh: string) => {
  try {
    return httpService.post(ENDPOINTS.refreshToken, { refreshToken: refresh });
  } catch (err: any) {
    console.log(err?.message);
  }
};

const httpService = axios.create({
  baseURL,
});

httpService.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
httpService.interceptors.response.use(
  (config) => {
    return config;
  },
  (error: AxiosError) => {
    const status = error?.response?.status;
    const originResponse = error.config;
    const refreshToken = localStorage.getItem("refreshToken");
    if (status === 401 && refreshToken && location.pathname !== "/login") {
      authRefreshToken(refreshToken)!.then((res) => {
        localStorage.setItem("accessToken", res.data.token.accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        originResponse!.headers[
          "Authorization"
        ] = `Bearer ${res.data.token.accessToken}`;
        return httpService.request(originResponse!);
      });
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);
export default httpService;
