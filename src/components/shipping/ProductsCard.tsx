import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

export default function ProductsCard() {
  const { updatedCart } = useContext(DataContext);
  return (
    <div className="grid grid-cols-3 gap-x-4 gap-y-4 justify-center">
      {updatedCart?.map((item) => (
        <div
          key={item._id}
          className="flex flex-col gap-y-3 justify-center items-center"
        >
          <img
            src={`http://${item.images?.[0] || "default-image.jpg"}`}
            alt={item._id}
            className="w-24"
          />
          <p>{item.name}</p>
          <p>{item.count} عدد</p>
        </div>
      ))}
    </div>
  );
}
