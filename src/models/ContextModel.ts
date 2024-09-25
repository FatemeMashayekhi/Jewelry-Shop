import { UseMutationResult, UseQueryResult } from "@tanstack/react-query";
import { ProductsEntity } from "./GetProducts";

export interface Admin {
  username: string;
  password: string | number;
}

export interface Category {
  _id: string;
  name: string;
  icon: string;
  createdAt: string;
  updatedAt: string;
  slugname: string;
}

export type DataContextType = {
  handleLogin?: (admin: Admin) => void;
  postGenerateAccessToken?: UseMutationResult<void, Error, void, unknown>;
  getAllCategories?: UseQueryResult<Category[], unknown>;
  getAllProducts?: UseQueryResult<ProductsEntity[], unknown>;
};
