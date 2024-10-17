export interface Order {
  user: string;
  products?: ProductsEntity[] | null;
  deliveryStatus: boolean;
  deliveryDate: string;
}
export interface ProductsEntity {
  product: string;
  count: number;
}
