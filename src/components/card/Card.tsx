import React from "react";
import { ProductsEntity } from "../../models/GetProductsModel";
import { Category } from "../../models/DataContextModel";
import { CardComponentProps } from "../../models/CardModel";

const CardComponent: React.FC<CardComponentProps> = ({
  item,
  isCategory,
  showDiscount = true,
}) => {
  return (
    <div id="card" className="flex flex-col gap-y-3 indicator">
      {isCategory ? (
        <>
          <div className="bg-[#f6f3ee] rounded-lg">
            <img
              src={`http://localhost:8000/images/categories/icons/${
                (item as Category).icon
              }`}
              alt={(item as Category)._id}
              className="mix-blend-darken"
            />
          </div>
          <p className="font-bold text-xs text-center">
            {(item as Category).name}
          </p>
        </>
      ) : (
        <>
          {showDiscount && (item as ProductsEntity).discount && (
            <span className="indicator-item indicator-top indicator-end badge bg-[#a29180] font-semibold text-xs text-white rounded-lg size-8">
              {(item as ProductsEntity).discount} %
            </span>
          )}
          <img
            src={`http://${
              (item as ProductsEntity).images?.[0] || "default-image.jpg"
            }`}
            alt={(item as ProductsEntity)._id}
            className="size-40"
          />
          <div className="font-semibold text-sm flex flex-col gap-y-4">
            <p>{(item as ProductsEntity).name}</p>
            <div className="flex gap-x-2 justify-end">
              <p className="text-gray-400 text-xs">تومان</p>
              <p>{(item as ProductsEntity).price}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CardComponent;
