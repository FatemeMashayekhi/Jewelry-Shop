import { Icon } from "@iconify/react";
import { useContext, useState } from "react";
import { DataContext } from "../../context/DataContext";

export default function InformationSide() {
  const { singleProduct, setUpdatedCart } = useContext(DataContext);
  const [count, setCount] = useState(0);

  const handlePlus = () => {
    setCount((prev) => prev + 1);
  };

  const handleMinus = () => {
    if (count >= 1) {
      setCount((prev) => prev - 1);
    }
  };

  const handleUpdateCart = () => {
    if (setUpdatedCart && singleProduct) {
      setUpdatedCart((prevCart) => {
        const newCart = [...prevCart, { ...singleProduct, count: count }];
        return newCart;
      });
    }
  };

  if (!singleProduct) return <div>Loading...</div>;

  return (
    <>
      {singleProduct && (
        <div
          key={singleProduct._id}
          className="bg-white h-full w-[500px] p-4 flex flex-col gap-y-28 font-semibold"
        >
          <div className="flex flex-col gap-y-5">
            <div className="flex gap-x-2">
              <p>نام کالا :</p>
              <p>{singleProduct.name}</p>
            </div>
            <div className="flex gap-x-3">
              <p>دسته بندی :</p>
              <p>{singleProduct.category.name}</p>
              <Icon
                icon="material-symbols:arrow-back-2"
                width="24"
                height="24"
                style={{ color: "#bab19e" }}
              />
              <p>{singleProduct.subcategory.name}</p>
            </div>
            <div className="flex gap-x-2">
              <p>قیمت کالا :</p>
              <p>{singleProduct.price}</p>
              <p>تومان</p>
            </div>
            <div className="flex flex-col gap-y-2">
              <p>توضیحات :</p>
              <p>{singleProduct.description}</p>
            </div>
            <div className="flex gap-x-2 items-center">
              <p>تعداد :</p>
              <div className="join rounded-lg">
                <button
                  className="btn join-item bg-[#bab19e]"
                  onClick={handlePlus}
                >
                  <Icon
                    icon="line-md:plus"
                    width="24"
                    height="24"
                    style={{ color: "white" }}
                  />
                </button>
                <p className="btn join-item bg-[#bab19e] text-white">{count}</p>
                <button
                  className="btn join-item bg-[#bab19e]"
                  onClick={handleMinus}
                >
                  <Icon
                    icon="line-md:minus"
                    width="24"
                    height="24"
                    style={{ color: "white" }}
                  />
                </button>
              </div>
            </div>
          </div>
          <button
            className={`btn bg-[#776c55] rounded-lg text-white ${
              count === 0 ? "cursor-not-allowed opacity-50" : ""
            }`}
            onClick={handleUpdateCart}
            disabled={count === 0}
          >
            افزودن به سبد خرید
          </button>
        </div>
      )}
    </>
  );
}
