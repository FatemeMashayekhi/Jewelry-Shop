import { Icon } from "@iconify/react/dist/iconify.js";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";

const menuItems = [
  { path: "/management", label: "محصولات" },
  { path: "/management/inventory", label: "موجودی و قیمت ها" },
  { path: "/management/orders", label: "سفارش ها" },
];

export default function SecondaryLayout() {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login");
    const token = localStorage.getItem("accessToken");
    if (token) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    }
  };
  return (
    <>
      <div className="flex items-center justify-between px-14 py-10 bg-[#FEFAF6] shadow">
        <div className="flex items-center gap-x-2">
          <Icon icon="mdi:rhombus" style={{ color: "black" }} />
          <p className="font-bold text-xl">پنل مدیریت طلای مشایخی</p>
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
        <div className="flex gap-x-3">
          <button onClick={handleLogout}>
            <p className="font-bold hover:text-red-500">خروج از پنل</p>
          </button>

          <p className="text-2xl h-5">|</p>
          <Link
            to={"/"}
            className="flex items-center gap-x-2 hover:text-red-500"
          >
            <p className="font-bold">بازگشت به سایت</p>
            <Icon icon="ic:sharp-arrow-back" style={{ color: "black" }} />
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}
