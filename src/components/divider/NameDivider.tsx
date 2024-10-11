import { Icon } from "@iconify/react";

export default function NameDivider() {
  const repeatedElements = Array(10)
    .fill(null)
    .map((_, index) => (
      <div key={index} className="flex items-center gap-x-7">
        <Icon icon="mdi:rhombus" style={{ color: "#bab19e" }} />
        <p className="text-sm">مشایخی</p>
        <Icon icon="mdi:rhombus" style={{ color: "#bab19e" }} />
      </div>
    ));
  return (
    <div id="divider" className="bg-[#e5dfd7] flex justify-between p-2">
      {repeatedElements}
    </div>
  );
}
