import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

export default function CategoriesCards() {
  const { getAllCategories } = useContext(DataContext);
  console.log(getAllCategories?.data);

  if (!getAllCategories) {
    return <div>Loading...</div>;
  }

  if (getAllCategories.isError) {
    return <div>Error loading categories</div>;
  }
  return (
    <div id="categories-cards" className="flex px-14 justify-center gap-x-20">
      {Array.isArray(getAllCategories.data) &&
        getAllCategories?.data.map((item) => (
          <div key={item._id} className="flex flex-col gap-y-2">
            <div className="bg-[#f6f3ee] rounded-lg">
              <img
                src={`http://localhost:8000/images/categories/icons/${item.icon}`}
                alt={item._id}
                className="mix-blend-darken"
              />
            </div>
            <p className="font-bold text-xs text-center">{item.name}</p>
          </div>
        ))}
    </div>
  );
}
