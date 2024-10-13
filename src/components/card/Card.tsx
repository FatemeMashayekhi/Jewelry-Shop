import React from "react";
import { useNavigate } from "react-router-dom";
import { ProductsEntity } from "../../models/GetProductsModel";
import { Category } from "../../models/DataContextModel";
import { CardComponentProps } from "../../models/CardModel";
import NumberConverter from "../number-converter/NumberConverter";

const CardComponent: React.FC<CardComponentProps> = ({
  item,
  isCategory,
  showDiscount = true,
}) => {
  const cardClassName = `flex flex-col gap-y-3 indicator cursor-pointer ${
    isCategory ? "" : "shadow-lg rounded-lg"
  }`;
  // const { setProductId } = useContext(DataContext);
  const navigate = useNavigate();

  const linkTo = isCategory
    ? `/grouping/${(item as Category)._id}`
    : `/${(item as ProductsEntity)._id}`;

  const handleClick = () => {
    // if (!isCategory && setProductId) {
    //   setProductId((item as ProductsEntity)._id);
    // }
    navigate(linkTo);
  };

  return (
    <div id="card" className={cardClassName} onClick={handleClick}>
      {isCategory ? (
        <>
          <div className="bg-[#f6f3ee] rounded-lg">
            <img
              src={`http://localhost:8000/images/categories/icons/${
                (item as Category).icon
              }`}
              alt={(item as Category)._id}
              className="mix-blend-darken size-20"
            />
          </div>
          <p className="font-bold text-xs text-center">
            {(item as Category).name}
          </p>
        </>
      ) : (
        <>
          {showDiscount && (item as ProductsEntity).discount && (
            <span className="indicator-item indicator-top indicator-end badge bg-[#a29180] font-semibold text-xs text-white rounded-lg size-10">
              {(item as ProductsEntity).discount} %
            </span>
          )}
          <img
            src={`http://${
              (item as ProductsEntity).images?.[0] || "default-image.jpg"
            }`}
            alt={(item as ProductsEntity)._id}
            className="w-72 h-80 rounded-t-lg"
          />
          <div className="font-semibold text-sm flex flex-col py-2 px-4">
            <p>{(item as ProductsEntity).name}</p>
            <div className="flex gap-x-2 justify-end">
              <p className="text-gray-400 text-xs">تومان</p>
              <p>{NumberConverter((item as ProductsEntity).price)}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CardComponent;
