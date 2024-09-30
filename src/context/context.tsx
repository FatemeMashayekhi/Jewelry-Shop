import { useMutation, useQuery } from "@tanstack/react-query";
import { createContext, useState } from "react";
import { ADMIN_LOGIN_URL, GENERATE_ACCESS_TOKEN_URL } from "../services/api";
import { toast } from "react-toastify";
import { Admin, Category, DataContextType } from "../models/ContextModel";
import axios from "../services/baseService";
import dataService from "../services/DataService";
import { queryClient } from "../main";

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

  ///get all categories
  const getAllCategories = useQuery<Category[], unknown>({
    queryKey: ["getAllCategories"],
    queryFn: async () => {
      const allCategories = await dataService.getAllCategories();
      return allCategories.data.categories;
    },
  });

  ///get all products
  const getAllProducts = useQuery({
    queryKey: ["getAllProducts"],
    queryFn: async () => {
      const allProducts = await dataService.getAllProducts();
      console.log(allProducts.data.products);
      return allProducts.data.products;
    },
  });

  ///add product modal
  const [openAdd, setOpenAdd] = useState(false);

  ///post new product
  const postNewProduct = useMutation({
    mutationFn: async (product: FormData) => {
      const newProduct = await dataService.PostProducts(product);
      console.log(newProduct);
      return newProduct;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getAllProducts"] });
      toast.success("محصول جدید با موفقیت اضافه شد");
    },
  });

  const handlePostNewProduct = (product: FormData) => {
    postNewProduct.mutate(product);
  };

  return (
    <DataContext.Provider
      value={{
        handleLogin,
        postGenerateAccessToken,
        getAllCategories,
        getAllProducts,
        openAdd,
        setOpenAdd,
        handlePostNewProduct,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
