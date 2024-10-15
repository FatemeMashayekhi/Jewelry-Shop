import React from "react";
import { useContext } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { DataContext } from "../../context/DataContext";
import { ProductsEntity } from "../../models/GetProductsModel";
import CardComponent from "../card/Card";
import { Icon } from "@iconify/react";

const OfferSection: React.FC = () => {
  const { getDiscountProducts } = useContext(DataContext);

  const settings = {
    speed: 500,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    centerMode: true,
    adaptiveHeight: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: (
      <Icon icon="fluent-mdl2:chevron-left-med" color="#bab19e" z={50} />
    ),
    prevArrow: (
      <Icon icon="fluent-mdl2:chevron-right-med" color="#bab19e" z={50} />
    ),
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="w-[80%] sm:w-[90%] lg:w-[95%]">
      {Array.isArray(getDiscountProducts?.data) &&
        getDiscountProducts?.data.map((item: ProductsEntity) => (
          <div key={item._id} className="p-6">
            <CardComponent item={item} />
          </div>
        ))}
    </Slider>
  );
};

export default OfferSection;
