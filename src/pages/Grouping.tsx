import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import Sidebar from "../components/grouping/SideBar";

export default function Grouping() {
  const { categoryId } = useParams();
  const { setCategoryId, category } = useContext(DataContext);
  useEffect(() => {
    if (setCategoryId && categoryId) {
      setCategoryId(categoryId);
    }
  }, [categoryId, setCategoryId]);
  console.log(category);

  return (
    <>
      <div className="bg-[#e5dfd7] h-2"></div>
      <div className="flex">
        <Sidebar />
        <div id="category-group" className="flex-1 "></div>
      </div>
    </>
  );
}
