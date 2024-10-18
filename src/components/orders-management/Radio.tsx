import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

export default function Radio() {
  const { setStatus, setOrderPage } = useContext(DataContext);

  const handleRadioChange = (status: string) => {
    setStatus?.(status);
    setOrderPage?.("1");
  };

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
            onChange={() => handleRadioChange("false")}
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
            onChange={() => handleRadioChange("true")}
          />
        </label>
      </div>
    </div>
  );
}
