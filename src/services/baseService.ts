import axios, { AxiosError } from "axios";
import { ADMIN_LOGIN_URL, BASE_URL, GENERATE_ACCESS_TOKEN_URL } from "./api";

axios.defaults.baseURL = BASE_URL;

axios.interceptors.request.use((req) => {
  if (req.url !== ADMIN_LOGIN_URL) {
    const token = localStorage.getItem("accessToken");
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

axios.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error: AxiosError) => {
    const status = error?.response?.status;
    const originResponse = error.config;
    const refreshToken = localStorage.getItem("refreshToken");
    if (status === 401 && refreshToken && location.pathname !== "/login") {
      try {
        const res = await authRefreshToken(refreshToken);
        if (res) {
          localStorage.setItem("accessToken", res.data.token.accessToken);
          localStorage.setItem("refreshToken", refreshToken);
          originResponse!.headers[
            "Authorization"
          ] = `Bearer ${res.data.token.accessToken}`;
          return axios.request(originResponse!);
        }
      } catch (err) {
        console.log(err);
      }
    }
    return Promise.reject(error);
  }
);

export default axios;

const authRefreshToken = (refresh: string) => {
  try {
    return axios.post(GENERATE_ACCESS_TOKEN_URL, { refreshToken: refresh });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.log(err?.message);
  }
};
