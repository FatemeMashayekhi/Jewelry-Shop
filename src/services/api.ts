export const BASE_URL = "http://localhost:8000/api";

export const CATEGORIES_URL = "/categories";
export const PRODUCTS_URL =
  "/products?page=1&limit=4&fields=-rating,-createdAt,-updatedAt,-__v&sort=price&quantity[gte]=8";

export const SUBCATEGORIES_URL = "/subcategories";
