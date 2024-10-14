import React, { useRef } from "react";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { ProductsEntity } from "../../models/GetProductsModel";
import CardComponent from "../card/Card";

const OfferSection: React.FC = () => {
  const { getDiscountProducts } = useContext(DataContext);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;

    container.classList.add("cursor-grabbing");
    container.classList.remove("cursor-grab");

    const startX = e.pageX - container.offsetLeft;
    const scrollLeft = container.scrollLeft;

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.pageX - container.offsetLeft;
      const walk = x - startX; // Calculate the distance to scroll
      container.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      container.classList.remove("cursor-grabbing");
      container.classList.add("cursor-grab");
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      id="offer"
      className="flex px-20 gap-x-14 justify-center items-center overflow-hidden"
    >
      {/* <div id="img">
        <img src="./src/assets/images/offer-pic.png" alt="offer-pic" />
      </div> */}
      <div id="offer-products" className="flex items-center gap-y-4 flex-1">
        <div
          id="cards-container"
          className="flex gap-x-10 no-scrollbar overflow-x-auto cursor-grab py-6 w-full"
          onMouseDown={handleMouseDown}
          ref={containerRef}
          style={{ flex: "0 0 auto", display: "flex", alignItems: "center" }}
        >
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
