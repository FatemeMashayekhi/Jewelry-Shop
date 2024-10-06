import axios from "../services/baseService";
import { CATEGORIES_URL, POST_PRODUCTS, PRODUCTS_URL } from "./api";

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

const dataService = {
  getAllCategories,
  getAllProducts,
  PostProducts,
};

export default dataService;
