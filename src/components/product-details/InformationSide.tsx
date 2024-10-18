import { Icon } from "@iconify/react";
import { useContext, useState } from "react";
import { DataContext } from "../../context/DataContext";
import removeHtmlTagsAndEntities from "../remove-tags/RemoveTags";
import { toast } from "react-toastify";
import NumberConverter from "../number-converter/NumberConverter";

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
        const existingItem = prevCart.find(
          (item) => item._id === singleProduct._id
        );
        if (existingItem) {
          toast.error("این کالا قبلاً به سبد خرید اضافه شده است");
          return prevCart;
        }
        const newCart = [...prevCart, { ...singleProduct, count: count }];
        toast.success("کالا با موفقیت به سبد خرید اضافه شد");
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
          className="bg-white h-full p-4 flex flex-col gap-y-28 font-semibold"
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
              <p>{NumberConverter(singleProduct.price)}</p>
              <p>تومان</p>
            </div>
            <div className="flex gap-x-2">
              <p>قیمت کالا با تخفیف :</p>
              <p>
                {NumberConverter(
                  (singleProduct.discount / 100) * singleProduct.price
                )}
              </p>
              <p>تومان</p>
            </div>
            <div className="flex flex-col gap-y-2">
              <p>توضیحات :</p>
              <p>{removeHtmlTagsAndEntities(singleProduct.description)}</p>
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
