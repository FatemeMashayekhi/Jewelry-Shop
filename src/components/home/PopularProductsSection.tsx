import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { ProductsEntity } from "../../models/GetProductsModel";
import CardComponent from "../card/Card";

const PopularProductsSection: React.FC = () => {
  const { getPopularProducts } = useContext(DataContext);
  return (
    <div
      id="popular-products-container"
      className="flex justify-center px-10 gap-x-14"
    >
      {Array.isArray(getPopularProducts?.data) &&
        getPopularProducts?.data.map((item: ProductsEntity) => (
          <CardComponent key={item._id} item={item} showDiscount={false} />
        ))}
    </div>
  );
};

export default PopularProductsSection;
