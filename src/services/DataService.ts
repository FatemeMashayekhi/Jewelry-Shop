import { Admin } from "../models/ContextModel";
import axios from "../services/baseService";
import {
  ADMIN_LOGIN_URL,
  CATEGORIES_URL,
  DELETE_PRODUCT_BY_ID,
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

const dataService = {
  getAllCategories,
  getAllProducts,
  PostProducts,
  getAllSubCategories,
  postLogin,
  deleteProducts,
};

export default dataService;
