import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

export default function AllProducts() {
  const { getProducts } = useContext(DataContext);
  return (
    <>
      {Array.isArray(getProducts?.data) &&
        getProducts?.data.map((item) => (
          <div
            id="card"
            key={item._id}
            className="flex flex-col gap-y-3 indicator"
          >
            <img
              src={`http://${item.images?.[0] || "default-image.jpg"}`}
              alt={item._id}
              className="size-40"
            />
            <div className="font-semibold text-sm flex flex-col gap-y-4">
              <p>{item.name}</p>
              <div className="flex gap-x-2 justify-end">
                <p className="text-gray-400 text-xs">تومان</p>
                <p>{item.price} </p>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
