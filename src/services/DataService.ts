import { Admin } from "../models/DataContextModel";
import axios from "../services/baseService";
import {
  ADMIN_LOGIN_URL,
  CATEGORIES_URL,
  DELETE_PRODUCT_BY_ID,
  DISCOUNT_PRODUCT_URL,
  EDIT_PRODUCT_BY_ID,
  GET_ALL_ORDERS,
  GET_ALL_PRODUCTS,
  GET_ALL_PRODUCTS_BY_ID,
  GET_CATEGORY_BY_ID,
  POPULAR_PRODUCTS_URL,
  POST_PRODUCTS,
  PRODUCTS_URL,
  SUBCATEGORIES_URL,
} from "./api";

export const getAllCategories = async () => {
  try {
    const res = await axios.get(CATEGORIES_URL);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getAllProducts = async (page: string) => {
  try {
    const res = await axios.get(PRODUCTS_URL(page));
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getDiscountProducts = async () => {
  try {
    const res = await axios.get(DISCOUNT_PRODUCT_URL);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getAllProductsById = async (id: string) => {
  try {
    const res = await axios.get(GET_ALL_PRODUCTS_BY_ID(id));
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const PostProducts = async (product: FormData) => {
  try {
    const res = await axios.post(POST_PRODUCTS, product);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const deleteProducts = async (id: string) => {
  try {
    const res = await axios.delete(DELETE_PRODUCT_BY_ID(id));
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const editProduct = async (id: string, product: FormData) => {
  try {
    const res = await axios.patch(EDIT_PRODUCT_BY_ID(id), product);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getAllSubCategories = async () => {
  try {
    const res = await axios.get(SUBCATEGORIES_URL);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const postLogin = async (admin: Admin) => {
  try {
    const res = await axios.post(ADMIN_LOGIN_URL, admin);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getAllOrders = async () => {
  try {
    const res = await axios.get(GET_ALL_ORDERS);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getPopularProducts = async () => {
  try {
    const res = await axios.get(POPULAR_PRODUCTS_URL);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getProducts = async () => {
  try {
    const res = await axios.get(GET_ALL_PRODUCTS);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getCategoryById = async (id: string) => {
  try {
    const res = await axios.get(GET_CATEGORY_BY_ID(id));
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

const dataService = {
  getAllCategories,
  getAllProducts,
  PostProducts,
  getAllSubCategories,
  postLogin,
  deleteProducts,
  editProduct,
  getDiscountProducts,
  getAllProductsById,
  getAllOrders,
  getPopularProducts,
  getProducts,
  getCategoryById,
};

export default dataService;
