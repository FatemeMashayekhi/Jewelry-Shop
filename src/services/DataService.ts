import axios from "../services/baseService";
import { CATEGORIES_URL } from "./api";

export const getAllCategories = async () => {
  try {
    const res = await axios.get(CATEGORIES_URL);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

const dataService = {
  getAllCategories,
};

export default dataService;
