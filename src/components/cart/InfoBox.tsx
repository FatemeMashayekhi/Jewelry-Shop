export default function InfoBox() {
  return (
    <div>
      <div
        id="information"
        className="border-[1px] border-[#e5dfd7] p-5 flex flex-col gap-y-4"
      >
        <div className="flex justify-between">
          <p>جمع سبد خرید</p>
          <p>20000000 تومان</p>
        </div>
        <div className="flex justify-between">
          <p>سود شما از خرید</p>
          <p>53%</p>
        </div>
        <button className="btn btn-wide rounded-lg">تایید و تکمیل سفارش</button>
      </div>
    </div>
  );
}
