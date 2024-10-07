export interface newProduct {
  status: string;
  data: Data;
}
export interface Data {
  product: Product;
}
export interface Product {
  category: string;
  subcategory: string;
  name: string;
  price: number;
  quantity: number;
  brand: string;
  discount: number;
  description: string;
  thumbnail: string;
  images?: string[] | null;
  rating: Rating;
  _id: string;
  createdAt: string;
  updatedAt: string;
  slugname: string;
  __v: number;
}
export interface Rating {
  rate: number;
  count: number;
}
