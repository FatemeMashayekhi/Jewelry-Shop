import { UseMutationResult, UseQueryResult } from "@tanstack/react-query";
import { ProductsEntity } from "./GetProductsModel";

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

// export const defaultContext: DataContextType = {
//   handleLogin: () => {},
//   postGenerateAccessToken: {} as UseMutationResult<void, Error, void, unknown>,
//   getAllCategories: {} as UseQueryResult<Category[], unknown>,
//   getAllProducts: {} as UseQueryResult<ProductsEntity[], unknown>,
//   openAdd: false,
//   setOpenAdd: () => {},
// };

export type DataContextType = {
  handleLogin?: (admin: Admin) => void;
  postGenerateAccessToken?: UseMutationResult<void, Error, void, unknown>;
  getAllCategories?: UseQueryResult<Category[], unknown>;
  getAllProducts?: UseQueryResult<ProductsEntity[], unknown>;
  openAdd?: boolean;
  setOpenAdd?: React.Dispatch<React.SetStateAction<boolean>>;
  handlePostNewProduct?: (product: FormData) => void;
};
