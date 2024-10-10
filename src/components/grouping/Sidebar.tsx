import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen px-24 py-6 bg-[#e5dfd7] shadow-lg">
      <div className="space-y-3">
        <div className="flex items-center">
          <h2 className="text-xl font-bold">دسته بندی محصولات</h2>
        </div>
        <div className="flex-1">
          <ul className="pt-2 pb-4 space-y-4 text-sm">
            <li className="rounded-sm">
              <Link
                to="/"
                className="flex items-center p-2 space-x-3 rounded-md hover:bg-[#bab19e]"
              >
                <span>Home</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
