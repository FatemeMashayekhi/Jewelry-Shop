import { Icon } from "@iconify/react";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import NumberConverter from "../number-converter/NumberConverter";

export default function ProductCard() {
  const { updatedCart, setUpdatedCart } = useContext(DataContext);

  const handlePlus = (itemId: string) => {
    if (updatedCart && setUpdatedCart) {
      const newCart = updatedCart.map((item) =>
        item._id === itemId ? { ...item, count: (item.count ?? 0) + 1 } : item
      );
      setUpdatedCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  };

  const handleMinus = (itemId: string) => {
    if (updatedCart && setUpdatedCart) {
      const newCart = updatedCart
        .map((item) =>
          item._id === itemId ? { ...item, count: (item.count ?? 0) - 1 } : item
        )
        .filter((item) => (item.count ?? 0) > 0);
      setUpdatedCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  };

  return (
    <div>
      {updatedCart?.map((item) => (
        <div
          key={item._id}
          id="product-card"
          className="flex flex-col gap-y-3 border-[1px] border-[#e5dfd7] p-5"
        >
          <div className="flex gap-x-8">
            <div>
              <img
                src={`http://${item.images?.[0] || "default-image.jpg"}`}
                alt={item.name}
                className="w-20"
              />
            </div>
            <div className="flex flex-col gap-y-3">
              <p>{item.name}</p>
              <p>{item.subcategory.name}</p>
              <p>{item.category.name}</p>
              <p>ارسال رایگان</p>
            </div>
          </div>
          <div className="flex gap-x-8 items-center">
            <div className="join rounded-lg">
              <button
                className="btn join-item bg-[#bab19e]"
                onClick={() => handlePlus(item._id)}
              >
                <Icon
                  icon="line-md:plus"
                  width="15"
                  height="15"
                  style={{ color: "white" }}
                />
              </button>
              <p className="btn join-item bg-[#bab19e] text-white">
                {item.count}
              </p>
              <button
                className="btn join-item bg-[#bab19e]"
                onClick={() => handleMinus(item._id)}
              >
                <Icon
                  icon="line-md:minus"
                  width="15"
                  height="15"
                  style={{ color: "white" }}
                />
              </button>
            </div>
            <div className="flex flex-col gap-y-1">
              <p>{NumberConverter(item.price * (item.count || 1))} تومان</p>
              <div className="flex gap-x-2">
                <p>{item.discount}% تخفیف :</p>
                <p>
                  {NumberConverter(
                    (item.discount / 100) * item.price * (item.count || 1)
                  )}
                  تومان
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
