import { Category } from "./DataContextModel";
import { ProductsEntity } from "./GetProductsModel";

export interface CardComponentProps {
  item: ProductsEntity | Category;
  isCategory?: boolean;
}
