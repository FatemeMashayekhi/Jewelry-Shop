export interface ProductsEntity {
  _id: string;
  category: Category;
  subcategory: Subcategory;
  name: string;
  price: number;
  quantity: number;
  brand: string;
  discount: number;
  description: string;
  thumbnail: string;
  images?: string[] | null;
  slugname: string;
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
