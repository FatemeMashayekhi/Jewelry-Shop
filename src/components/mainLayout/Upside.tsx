import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
export default function Upside() {
  return (
    <div id="up-side" className="flex justify-between items-center">
      <div className="flex items-center gap-x-2">
        <Icon className="text-yellow-400 size-7" icon="tabler:coin-filled" />
        <div className="flex flex-col items-center">
          <p className="text-gray-400 text-sm">نرخ امروز دلار</p>
          <p className="font-bold">60,000 ت</p>
        </div>
      </div>
      <p className="font-bold text-2xl">طلای مشایخی</p>
      <div id="left-side-icons" className="flex items-center gap-x-2">
        <Icon
          className="size-5"
          icon="mingcute:search-line"
          style={{ color: "black" }}
        />
        <Link to={"/login"}>
          <Icon className="size-5" icon="mdi:user" style={{ color: "black" }} />
        </Link>
        <p className="text-2xl h-5">|</p>

        <div className="indicator">
          <span className="indicator-item badge badge-secondary size-3">0</span>
          <Icon
            icon="material-symbols:shopping-bag-outline"
            style={{ color: "black" }}
            className="size-5"
          />
        </div>
      </div>
    </div>
  );
}
