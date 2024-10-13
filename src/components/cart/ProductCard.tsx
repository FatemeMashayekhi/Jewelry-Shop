import { Icon } from "@iconify/react";

export default function ProductCard() {
  return (
    <div
      id="product-card"
      className="flex flex-col gap-y-3 border-[1px] border-[#e5dfd7] p-5"
    >
      <div className="flex gap-x-8">
        <div>
          <img
            src="./src/assets/images/loginpic.jpg"
            alt="pic"
            className="w-20"
          />
        </div>
        <div className="flex flex-col gap-y-3">
          <p>دستبند طلای پلنگ</p>
          <p>کالکشن پنتره</p>
          <p>طلای 18 عیار</p>
          <p>ارسال رایگان</p>
        </div>
      </div>
      <div className="flex gap-x-8 items-center">
        <div className="join rounded-lg">
          <button className="btn join-item bg-[#bab19e]">
            <Icon
              icon="line-md:plus"
              width="15"
              height="15"
              style={{ color: "white" }}
            />
          </button>
          <p className="btn join-item bg-[#bab19e] text-white">0</p>
          <button className="btn join-item bg-[#bab19e]">
            <Icon
              icon="line-md:minus"
              width="15"
              height="15"
              style={{ color: "white" }}
            />
          </button>
        </div>
        <div className="flex flex-col gap-y-1">
          <p>10% تخفیف</p>
          <p>45000000 تومان</p>
        </div>
      </div>
    </div>
  );
}
