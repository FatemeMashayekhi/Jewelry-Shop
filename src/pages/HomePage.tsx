import { Icon } from "@iconify/react";
import CategoriesCards from "../components/home/CategoriesCards";
import OfferSection from "../components/home/OfferSection";
import PopularProductsDivider from "../components/divider/PopularProductsDivider";
import PopularProductsSection from "../components/home/PopularProductsSection";
import AllProducts from "../components/home/AllProducts";
import AllProductsDivider from "../components/divider/AllProductsDivider";
import DiscountDivider from "../components/divider/DiscountDivider";

export default function HomePage() {
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
      <DiscountDivider />
      <OfferSection />
      <div className="flex justify-center">
        <img src="./src/assets/images/BannerSecond.png" alt="secondBanner" />
      </div>
      <PopularProductsDivider />
      <PopularProductsSection />
      <AllProductsDivider />
      <div
        id="products-card-container"
        className="flex justify-center items-center"
      >
        <AllProducts />
      </div>
    </div>
  );
}
