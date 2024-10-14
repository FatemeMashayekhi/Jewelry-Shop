import PaymentForm from "../components/shipping/PaymentForm";
import PriceInfo from "../components/shipping/PriceInfo";
import ProductsCard from "../components/shipping/ProductsCard";
import Timing from "../components/shipping/Timing";

export default function Shipping() {
  return (
    <div className="flex font-semibold justify-center gap-4">
      <div className="flex flex-col gap-4">
        <div id="Info" className="border-[1px] border-[#e5dfd7] p-4 bg-white">
          <p className="text-gray-500">اطلاعات</p>
          <PaymentForm />
        </div>
        <div
          id="products"
          className="border-[1px] border-[#e5dfd7] flex flex-col p-4 bg-white"
        >
          <p className="text-gray-500">محصولات</p>
          <div className="flex gap-x-4 p-4 justify-center">
            <ProductsCard />
          </div>
        </div>
        <Timing />
      </div>
      <PriceInfo />
    </div>
  );
}
