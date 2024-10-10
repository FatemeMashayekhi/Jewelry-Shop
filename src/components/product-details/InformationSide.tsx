import { Icon } from "@iconify/react";

export default function InformationSide() {
  return (
    <div className="bg-white p-4 flex flex-col gap-y-5 font-semibold">
      <div className="flex gap-x-2">
        <p>نام کالا :</p>
        <p>گردنبند تیفانی</p>
      </div>

      <div className="flex gap-x-3">
        <p>دسته بندی :</p>
        <p>گردنبند</p>
        <Icon
          icon="material-symbols:arrow-back-2"
          width="24"
          height="24"
          style={{ color: "#bab19e" }}
        />
        <p>کالکشن گرین</p>
      </div>
      <div className="flex gap-x-2">
        <p>قیمت کالا :</p>
        <p>20000</p>
        <p>تومان</p>
      </div>
      <div className="flex flex-col gap-y-2">
        <p>توضیحات :</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum minus
        </p>
      </div>

      <div className="flex gap-x-2 items-center">
        <p>تعداد :</p>
        <div className="join rounded-lg">
          <button className="btn join-item bg-[#bab19e]">
            {" "}
            <Icon
              icon="line-md:plus"
              width="24"
              height="24"
              style={{ color: "white" }}
            />
          </button>
          <p className="btn join-item bg-[#bab19e] text-white">0</p>
          <button className="btn join-item bg-[#bab19e]">
            {" "}
            <Icon
              icon="line-md:minus"
              width="24"
              height="24"
              style={{ color: "white" }}
            />
          </button>
        </div>
      </div>
      <button className="btn btn-success rounded-lg text-white">
        افزودن به سبد خرید
      </button>
    </div>
  );
}
