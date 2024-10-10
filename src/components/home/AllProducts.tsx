import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { ProductsEntity } from "../../models/GetProductsModel";
import CardComponent from "../card/Card";

const AllProducts: React.FC = () => {
  const { getProducts } = useContext(DataContext);
  return (
    <>
      <div className="grid grid-cols-4 gap-x-32 gap-y-20 justify-center">
        {Array.isArray(getProducts?.data) &&
          getProducts?.data.map((item: ProductsEntity) => (
            <CardComponent key={item._id} item={item} showDiscount={false} />
          ))}
      </div>
    </>
  );
};

export default AllProducts;
