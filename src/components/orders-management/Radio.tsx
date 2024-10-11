import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

export default function Radio() {
  const { setStatus } = useContext(DataContext);
  return (
    <div className="flex gap-x-10">
      <div className="form-control">
        <label className="label cursor-pointer flex gap-x-2">
          <span className="label-text font-bold">
            سفارش های در انتظار ارسال
          </span>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-black"
            onChange={() => setStatus && setStatus("false")}
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer flex gap-x-2">
          <span className="label-text font-bold">سفارش های تحویل شده</span>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-black"
            defaultChecked
            onChange={() => setStatus && setStatus("true")}
          />
        </label>
      </div>
    </div>
  );
}
