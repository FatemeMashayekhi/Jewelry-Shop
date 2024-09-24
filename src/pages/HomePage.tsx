import { Icon } from "@iconify/react/dist/iconify.js";
import { useContext } from "react";
import { DataContext } from "../context/context";

export default function HomePage() {
  const { getAllCategories } = useContext(DataContext);
  console.log(getAllCategories?.data);

  if (!getAllCategories) {
    return <div>Loading...</div>;
  }

  if (getAllCategories.isError) {
    return <div>Error loading categories</div>;
  }
  return (
    <div className="flex flex-col gap-y-14">
      <div id="banner" className="px-14 py-4 flex justify-center">
        <img src="./src/assets/images/banner2.png" alt="banner-pic" />
      </div>
      <div id="categories" className="flex flex-col">
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
        <div id="categories-cards" className="flex">
          {Array.isArray(getAllCategories) &&
            getAllCategories.map((item) => (
              <div key={item._id}>
                <img src={item.icon} alt={item._id} />
                <p>{item.name}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
