import { useMutation } from "@tanstack/react-query";
import { createContext } from "react";
import { ADMIN_LOGIN_URL, GENERATE_ACCESS_TOKEN_URL } from "../services/api";
import { toast } from "react-toastify";
import { Admin, DataContextType } from "../models/ContextModel";
import axios from "../services/baseService";

export const DataContext = createContext<DataContextType>({});

export const DataContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  ///admin login
  const postLogin = useMutation({
    mutationFn: async (admin: Admin) => {
      try {
        const res = await axios.post(ADMIN_LOGIN_URL, admin);
        return res.data;
      } catch (e) {
        console.log(e);
      }
    },
    onSuccess: (data) => {
      localStorage.setItem("accessToken", data.token.accessToken);
      localStorage.setItem("refreshToken", data.token.refreshToken);
      toast.success("ورود شما با موفقیت انجام شد");
    },
  });

  const handleLogin = (admin: Admin) => {
    postLogin.mutate(admin);
  };

  ///generate access token
  const postGenerateAccessToken = useMutation({
    mutationFn: async () => {
      try {
        const res = await axios.post(GENERATE_ACCESS_TOKEN_URL);
        return res.data;
      } catch (e) {
        console.log(e);
      }
    },
    onSuccess: (data) => {
      localStorage.setItem("accessToken", data.token.accessToken);
      alert("Doneeee");
    },
  });

  return (
    <DataContext.Provider value={{ handleLogin, postGenerateAccessToken }}>
      {children}
    </DataContext.Provider>
  );
};
