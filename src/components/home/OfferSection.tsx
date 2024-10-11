import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { ProductsEntity } from "../../models/GetProductsModel";
import CardComponent from "../card/Card";

const OfferSection: React.FC = () => {
  const { getDiscountProducts } = useContext(DataContext);

  return (
    <div id="offer" className="flex px-20 gap-x-14 justify-center items-center">
      <div id="img">
        <img src="./src/assets/images/offer-pic.png" alt="offer-pic" />
      </div>
      <div id="offer-products" className="flex items-center gap-y-4">
        <div id="cards-container" className="flex gap-x-10">
          {Array.isArray(getDiscountProducts?.data) &&
            getDiscountProducts?.data.map((item: ProductsEntity) => (
              <CardComponent key={item._id} item={item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
