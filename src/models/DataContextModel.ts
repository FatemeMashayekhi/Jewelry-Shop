/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseQueryResult } from "@tanstack/react-query";
import { ProductsEntity } from "./GetProductsModel";
import { Dispatch, SetStateAction } from "react";
import { OrdersEntity } from "./GetOrdersModel";
import { ProductById } from "./ProductByIdModel";
import { CategoryByID } from "./CategoryByIdModel";
import { Order } from "./OrdersModel";

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

export type EditableProduct = {
  id: string;
  originalPrice?: number;
  originalStock?: number;
  [field: string]: any;
};

export type EditingCell = {
  [key: string]: string | null;
};

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
  getDiscountProducts?: UseQueryResult<ProductsEntity[], unknown>;
  getPopularProducts?: UseQueryResult<ProductsEntity[], unknown>;
  getProducts?: UseQueryResult<ProductsEntity[], unknown>;
  setProductId?: React.Dispatch<React.SetStateAction<string | null>>;
  productId?: string | null;
  singleProduct?: ProductById;
  setCategoryId?: React.Dispatch<React.SetStateAction<string | undefined>>;
  category?: CategoryByID | null | undefined;
  setAllProducts?: React.Dispatch<React.SetStateAction<ProductsEntity[]>>;
  setStatus?: React.Dispatch<React.SetStateAction<string>>;
  orders?: OrdersEntity[] | undefined;
  setUpdatedCart?: React.Dispatch<React.SetStateAction<ProductById[]>>;
  updatedCart?: ProductById[];
  goldPrice?: number | null;
  handlePostOrder?: (order: Order) => void;
  orderTotalPages?: string;
  setOrderPage?: React.Dispatch<React.SetStateAction<string>>;
  orderPage?: string;
  updateProduct?: (id: string, key: string, value: string | number) => void;
  editedInventory?: { [id: string]: FormData };
  setEditedInventory?: React.Dispatch<
    React.SetStateAction<{ [id: string]: FormData }>
  >;
  editedInventoryIds?: string[];
  setEditedInventoryIds?: React.Dispatch<React.SetStateAction<string[]>>;
  flag?: boolean;
  setFlag?: React.Dispatch<React.SetStateAction<boolean>>;
};
