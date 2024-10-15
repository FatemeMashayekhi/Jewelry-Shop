import { Icon } from "@iconify/react";

export default function AllProductsDivider() {
  return (
    <div
      id="divider"
      className="bg-[#e5dfd7] flex justify-center items-center gap-x-4 p-2"
    >
      <Icon icon="mdi:rhombus" style={{ color: "#bab19e" }} />
      <p className="text-xl">همه ی محصولات</p>
      <Icon icon="mdi:rhombus" style={{ color: "#bab19e" }} />
    </div>
  );
}
