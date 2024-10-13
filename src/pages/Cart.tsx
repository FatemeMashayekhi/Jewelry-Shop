import InfoBox from "../components/cart/InfoBox";
import ProductCard from "../components/cart/ProductCard";

export default function Cart() {
  return (
    <div className="px-14 py-10 flex flex-col gap-y-8 font-semibold">
      <p className="text-2xl">سبد خرید</p>
      <div className="flex gap-x-4 justify-center">
        <div id="products-container" className="w-2/5 flex flex-col">
          <ProductCard />
        </div>
        <InfoBox />
      </div>
    </div>
  );
}
