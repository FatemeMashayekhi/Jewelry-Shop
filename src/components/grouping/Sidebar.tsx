import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataContext";

const Sidebar = () => {
  const { getAllCategories } = useContext(DataContext);
  return (
    <div className="flex flex-col min-h-[84vh] px-10 py-6 bg-[#e5dfd7] shadow-lg">
      <div className="space-y-3">
        <div className="flex items-center">
          <h2 className="text-xl font-bold">دسته بندی محصولات</h2>
        </div>
        <div className="flex-1">
          <ul className="pt-2 pb-4 space-y-4 text-sm">
            {Array.isArray(getAllCategories?.data) &&
              getAllCategories?.data.map((item) => (
                <li key={item._id} className="rounded-sm">
                  <Link
                    to={`/grouping/${item._id}`}
                    className="flex items-center p-2 space-x-3 rounded-md hover:bg-[#bab19e] font-semibold"
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
