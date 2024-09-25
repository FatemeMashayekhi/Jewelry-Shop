import axios from "../services/baseService";
import { CATEGORIES_URL, PRODUCTS_URL } from "./api";

export const getAllCategories = async () => {
  try {
    const res = await axios.get(CATEGORIES_URL);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getAllProducts = async () => {
  try {
    const res = await axios.get(PRODUCTS_URL);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

const dataService = {
  getAllCategories,
  getAllProducts,
};

export default dataService;
