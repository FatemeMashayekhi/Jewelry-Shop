export default function PriceInfo() {
  return (
    <div
      id="price"
      className="border-[1px] border-[#e5dfd7] p-4 flex flex-col gap-y-4 bg-white"
    >
      <div className="flex justify-between">
        <p>جمع سبد خرید</p>
        <p>20000000 تومان</p>
      </div>
      <div className="flex justify-between">
        <p>سود شما از خرید</p>
        <p>53%</p>
      </div>
      <button className="btn btn-wide rounded-lg">پرداخت</button>
    </div>
  );
}
