import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import NumberConverter from "../number-converter/NumberConverter";

export default function PriceInfo() {
  const { updatedCart } = useContext(DataContext);
  const totalPrice =
    updatedCart?.reduce((acc, item) => {
      return acc + item.price * (item.count ?? 1);
    }, 0) ?? 0;

  const totalDiscount =
    updatedCart?.reduce((acc, item) => {
      return acc + (item.discount / 100) * item.price * (item.count || 1);
    }, 0) ?? 0;

  return (
    <div
      id="price"
      className="border-[1px] border-[#e5dfd7] p-4 flex flex-col gap-y-4 bg-white"
    >
      <div className="flex justify-between">
        <p>جمع سبد خرید</p>
        <p>{NumberConverter(totalPrice)} تومان</p>
      </div>
      <div className="flex justify-between">
        <p>مبلغ قابل پرداخت</p>
        <p>{NumberConverter(totalDiscount)} تومان</p>
      </div>
      <button
        className="btn btn-wide rounded-lg bg-green-700 text-white"
        onClick={() => (window.location.href = "http://localhost:7000/")}
      >
        پرداخت
      </button>
    </div>
  );
}
