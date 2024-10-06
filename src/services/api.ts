export const BASE_URL = "http://localhost:8000/api";

export const CATEGORIES_URL = "/categories";
export const PRODUCTS_URL = (page: string) =>
  `/products?page=${page}&limit=4&fields=-rating,-createdAt,-updatedAt,-__v&sort=price&quantity[gte]=0`;

export const SUBCATEGORIES_URL = "/subcategories";
export const ADMIN_LOGIN_URL = "/auth/login";
export const GENERATE_ACCESS_TOKEN_URL = "/auth/token";
export const POST_PRODUCTS = "/products";
