import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import NumberConverter from "../number-converter/NumberConverter";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
export default function Upside() {
  const { updatedCart } = useContext(DataContext);
  return (
    <div id="up-side" className="flex justify-between items-center">
      <div className="flex items-center gap-x-2">
        <Icon className="text-yellow-400 size-7" icon="tabler:coin-filled" />
        <div className="flex flex-col items-center">
          <p className="text-gray-400 text-sm">نرخ امروز طلا</p>
          <p className="font-bold">{NumberConverter(3905100)} ت</p>
        </div>
      </div>
      <Link to={"/"} className="font-bold text-2xl">
        طلای مشایخی
      </Link>
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
          <span className="p-[2px] indicator-item indicator-top indicator-end badge badge-secondary font-semibold">
            {updatedCart?.length}
          </span>
          <Link to={"/checkout/cart"}>
            <Icon
              icon="material-symbols:shopping-bag-outline"
              style={{ color: "black" }}
              className="size-5"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
