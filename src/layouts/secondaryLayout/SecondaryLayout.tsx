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
      <div className="flex items-center justify-between px-14 py-10 bg-[#FEFAF6] shadow">
        <div className="flex items-center gap-x-2">
          <Icon icon="mdi:rhombus" style={{ color: "black" }} />
          <p className="font-bold text-xl">پنل مدیریت جواهری مشایخی</p>
        </div>

        <nav>
          <menu className="flex gap-x-28 items-center rounded-lg font-bold">
            {menuItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#55679C] border-b-2 border-[#55679C]"
                      : "hover:text-[#7C93C3]"
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </menu>
        </nav>
        <Link to={"/"} className="flex items-center gap-x-2 hover:text-red-500">
          <p className="font-bold">بازگشت به سایت</p>
          <Icon icon="ic:sharp-arrow-back" style={{ color: "black" }} />
        </Link>
      </div>
      <Outlet />
    </>
  );
}
