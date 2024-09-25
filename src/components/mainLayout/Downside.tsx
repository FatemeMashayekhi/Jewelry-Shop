import { NavLink } from "react-router-dom";

const menuItems = [
  { path: "/", label: "صفحه اصلی" },
  { path: "/products", label: "لیست محصولات" },
  { path: "/about", label: "سفارش طراحی طلا" },
  { path: "/cart", label: "پیشنهادات ویژه" },
  { path: "/login", label: "درباره ما" },
  { path: "/contact", label: "تماس با ما" },
];

export default function Downside() {
  return (
    <div id="down-side" className="flex justify-center">
      <nav>
        <menu className="flex gap-x-36">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "text-gray-400" : "hover:text-yellow-600"
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </menu>
      </nav>
    </div>
  );
}
