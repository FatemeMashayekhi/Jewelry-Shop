import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";

export default function PopularProductsDivider() {
  const popularProducts = [
    { name: "همه ی محصولات", id: 1, path: "/" },
    { name: " گردنبند طلا", id: 2, path: "/login" },
    { name: "دستبند طلا", id: 3, path: "/login" },
    { name: "انگشتر طلا", id: 4, path: "/login" },
    { name: "گوشواره طلا", id: 5, path: "/login" },
  ];
  return (
    <div className="flex font-semibold">
      <div
        id="right-side"
        className="flex items-center gap-x-2 shadow p-5 w-[12%]"
      >
        <Icon icon="mdi:rhombus" style={{ color: "#bab19e" }} />
        <div className="flex gap-x-1 items-center">
          <p>پرفروش ترین</p>
          <p className="text-[#bab19e]">محصولات</p>
        </div>
      </div>
      <div
        id="left-side"
        className="bg-[#e5dfd7] flex items-center text-sm justify-evenly w-[88%]"
      >
        {popularProducts?.map((item) => (
          <NavLink
            to={item.path}
            key={item.id}
            className={({ isActive }) =>
              isActive
                ? "text-white bg-[#a29180] p-2"
                : "text-gray-400 hover:text-black"
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
