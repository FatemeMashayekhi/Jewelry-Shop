import { Icon } from "@iconify/react";

export default function Pagination() {
  return (
    <div className="join rounded-lg">
      <button className="join-item btn">
        <Icon icon="ooui:next-ltr" style={{ color: "black" }} />
      </button>
      <button className="join-item btn">صفحه 22</button>
      <button className="join-item btn">
        <Icon icon="ooui:next-rtl" style={{ color: "black" }} />
      </button>
    </div>
  );
}
