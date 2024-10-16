import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import NumberConverter from "../number-converter/NumberConverter";

export default function InfoBox() {
  const navigate = useNavigate();
  const { updatedCart } = useContext(DataContext);
  const totalPrice =
    updatedCart?.reduce((acc, item) => {
      return acc + item.price * (item.count ?? 1);
    }, 0) ?? 0;

  const totalDiscount =
    updatedCart?.reduce((acc, item) => {
      return acc + ((item.price * item.discount) / 100) * (item.count || 1);
    }, 0) ?? 0;
  return (
    <div>
      <div
        id="information"
        className="border-[1px] border-[#e5dfd7] p-5 flex flex-col gap-y-4"
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
          className="btn btn-wide rounded-lg"
          onClick={() => navigate("/checkout/shipping")}
        >
          تایید و تکمیل سفارش
        </button>
      </div>
    </div>
  );
}
