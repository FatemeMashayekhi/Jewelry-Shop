import { Icon } from "@iconify/react";
import CategoriesCards from "../components/home/CategoriesCards";
import NameDivider from "../components/home/NameDivider";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function HomePage() {
  const { getDiscountProducts } = useContext(DataContext);
  console.log(getDiscountProducts?.data);
  return (
    <div className="flex flex-col gap-y-14">
      <div id="banner" className="px-14 py-4 flex justify-center">
        <img src="./src/assets/images/banner2.png" alt="banner-pic" />
      </div>
      <div id="categories" className="flex flex-col gap-y-5">
        <div className="flex justify-center gap-x-3 items-center font-bold text-2xl">
          <p>دسته بندی</p>
          <Icon icon="mdi:rhombus" style={{ color: "#bab19e" }} />
          <p>محصولات</p>
        </div>
        <div className="flex justify-center">
          <p className="text-sm text-gray-400">
            از بین محصولات متنوع مشایخی انتخاب کنید
          </p>
        </div>
        <CategoriesCards />
      </div>
      <NameDivider />
      <div id="offer" className="flex px-20 gap-x-14 items-center">
        <div id="img">
          <img src="./src/assets/images/offer-pic.png" alt="offer-pic" />
        </div>
        <div id="offer-products" className="flex items-center gap-y-4">
          <div id="cards-container" className="flex gap-x-10">
            {Array.isArray(getDiscountProducts?.data) &&
              getDiscountProducts?.data.map((item) => (
                <div
                  id="card"
                  key={item._id}
                  className="flex flex-col gap-y-3 indicator"
                >
                  <span className="indicator-item indicator-top indicator-end badge bg-[#a09379] font-semibold text-xs text-white rounded-lg size-8">
                    {item.discount} %
                  </span>
                  <img
                    src={`http://${item.images?.[0] || "default-image.jpg"}`}
                    alt={item._id}
                    className="size-40"
                  />
                  <div className="font-semibold text-sm flex flex-col gap-y-4">
                    <p>{item.name}</p>
                    <div className="flex gap-x-2 justify-end">
                      <p className="text-gray-400 text-xs">تومان</p>
                      <p>{item.price} </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
