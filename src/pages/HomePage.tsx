import { Icon } from "@iconify/react";
import CategoriesCards from "../components/home/CategoriesCards";
import NameDivider from "../components/home/NameDivider";

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
      <NameDivider />
      <div id="offer" className="flex px-20 gap-x-14">
        <div id="img" className="bg-gray-200 p-24">
          offer
        </div>
        <div id="offer-products">products</div>
      </div>
    </div>
  );
}
