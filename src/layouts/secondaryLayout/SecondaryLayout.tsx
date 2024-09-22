import { Icon } from "@iconify/react/dist/iconify.js";
import { Link, NavLink, Outlet } from "react-router-dom";

const menuItems = [
  { path: "/management", label: "محصولات" },
  { path: "/management/inventory", label: "موجودی و قیمت ها" },
  { path: "/management/orders", label: "سفارش ها" },
];

export default function SecondaryLayout() {
  return (
    <>
      <div className="flex items-center justify-between px-14 py-10 bg-[#FEFAF6] shadow rounded-3xl">
        <div className="flex items-center gap-x-2">
          <Icon icon="mdi:rhombus" style={{ color: "black" }} />
          <p className="font-bold text-xl">پنل مدیریت جواهری مشایخی</p>
        </div>

        <nav>
          <menu className="flex gap-x-14 items-center bg-[#EADBC8] p-4 rounded-lg">
            {menuItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-gray-400 border-b-2 border-gray-400"
                      : "hover:text-yellow-600"
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </menu>
        </nav>
        <Link to={"/"} className="flex items-center gap-x-2 hover:text-red-500">
          <p>بازگشت به سایت</p>
          <Icon icon="ic:sharp-arrow-back" style={{ color: "black" }} />
        </Link>
      </div>
      <Outlet />
    </>
  );
}
