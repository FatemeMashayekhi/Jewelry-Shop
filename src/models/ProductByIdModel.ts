export interface productById {
  status: string;
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Data;
}
export interface Data {
  products?: ProductById[] | null;
}
export interface ProductById {
  rating: Rating;
  _id: string;
  category: Category;
  subcategory: Subcategory;
  name: string;
  price: number;
  quantity: number;
  brand: string;
  count?: number;
  discount: number;
  description: string;
  thumbnail: string;
  images?: string[] | null;
  createdAt: string;
  updatedAt: string;
  slugname: string;
}
export interface Rating {
  rate: number;
  count: number;
}
export interface Category {
  _id: string;
  name: string;
  icon: string;
  createdAt: string;
  updatedAt: string;
  slugname: string;
  __v: number;
}
export interface Subcategory {
  _id: string;
  category: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  slugname: string;
  __v: number;
}
