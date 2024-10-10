export const BASE_URL = "http://localhost:8000/api";

export const CATEGORIES_URL = "/categories";
export const SUBCATEGORIES_URL = "/subcategories";
export const ADMIN_LOGIN_URL = "/auth/login";
export const GENERATE_ACCESS_TOKEN_URL = "/auth/token";
export const POST_PRODUCTS = "/products";
export const GET_ALL_ORDERS = "/orders";
export const DELETE_PRODUCT_BY_ID = (id: string) => `/products/${id}`;
export const EDIT_PRODUCT_BY_ID = (id: string) => `/products/${id}`;
export const GET_ALL_PRODUCTS_BY_ID = (id: string) => `/products/${id}`;
export const PRODUCTS_URL = (page: string) =>
  `/products?page=${page}&limit=4&fields=-rating,-createdAt,-updatedAt,-__v&sort=price&quantity[gte]=0`;
export const DISCOUNT_PRODUCT_URL = "/products?discount[gte]=50";
export const POPULAR_PRODUCTS_URL = "/products?quantity[lte]=200";
