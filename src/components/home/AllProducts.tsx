import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import CardComponent from "../card/Card";
import { ProductsEntity } from "../../models/GetProductsModel";

const AllProducts: React.FC = () => {
  const { getProducts } = useContext(DataContext);
  return (
    <>
      {Array.isArray(getProducts?.data) &&
        getProducts?.data.map((item: ProductsEntity) => (
          <CardComponent key={item._id} item={item} />
        ))}
    </>
  );
};

export default AllProducts;
