import { UseQueryResult } from "@tanstack/react-query";
import { ProductsEntity } from "./GetProductsModel";
import { Dispatch, SetStateAction } from "react";

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

export interface SubcategoriesEntity {
  _id: string;
  category: string;
  name: string;
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
  getAllCategories?: UseQueryResult<Category[], unknown>;
  getAllProducts?: UseQueryResult<ProductsEntity[], unknown>;
  openAdd?: boolean;
  setOpenAdd?: React.Dispatch<React.SetStateAction<boolean>>;
  handlePostNewProduct?: (product: FormData) => void;
  page?: string;
  setPage?: Dispatch<SetStateAction<string>>;
  totalPages?: number;
  getAllSubCategories?: UseQueryResult<SubcategoriesEntity[], unknown>;
  handleDeleteProduct?: (id: string) => void;
  openDelete?: boolean;
  setOpenDelete?: React.Dispatch<React.SetStateAction<boolean>>;
  deleteBtnHandler?: (id: string) => void;
  deletedProductId?: string;
  handleEditProduct?: (id: string, product: FormData) => void;
  editBtnHandler?: (item: ProductsEntity) => void;
  editedProduct?: ProductsEntity | null;
  setEditedProduct?: React.Dispatch<
    React.SetStateAction<ProductsEntity | null>
  >;
};
