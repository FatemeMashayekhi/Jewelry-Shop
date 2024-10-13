import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DateObject from "react-date-object";
export default function Timing() {
  const today = new Date();
  const handleDateChange = (value: DateObject | null) => {
    if (value) {
      // Convert DateObject to native Date
      const nativeDate = value.toDate();
      const isoDate = nativeDate.toISOString();
      localStorage.setItem("deliveryDate", isoDate);
    }
  };
  return (
    <div
      id="timing"
      className="border-[1px] border-[#e5dfd7] p-4 flex flex-col gap-y-4 bg-white"
    >
      <p className="text-gray-500">زمان ارسال</p>
      <div className="flex gap-x-3 items-center">
        <p>تاریخ :</p>
        <div style={{ direction: "rtl" }}>
          <DatePicker
            id="deliveryDate"
            name="deliveryDate"
            inputClass="custom-input"
            calendar={persian}
            locale={persian_fa}
            calendarPosition="bottom-right"
            minDate={today}
            onChange={handleDateChange}
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-5">
        <label className="flex items-center gap-x-3 cursor-pointer">
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-black"
            defaultChecked
          />
          <span className="label-text">ساعت 9 تا 12</span>
        </label>

        <label className="flex items-center gap-x-3 cursor-pointer">
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-black"
            defaultChecked
          />
          <span className="label-text">ساعت 12 تا 15</span>
        </label>

        <label className="flex items-center gap-x-3 cursor-pointer">
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-black"
            defaultChecked
          />
          <span className="label-text">ساعت 15 تا 18</span>
        </label>

        <label className="flex items-center gap-x-3 cursor-pointer">
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-black"
            defaultChecked
          />
          <span className="label-text">ساعت 18 تا 21</span>
        </label>
      </div>
    </div>
  );
}
