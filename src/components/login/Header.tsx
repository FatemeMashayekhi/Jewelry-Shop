import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="bg-[#FEFAF6] p-10 flex justify-between rounded-b-full">
        <div></div>

        <p className="font-bold text-3xl">جواهری مشایخی</p>

        <Link
          to={"/"}
          className="flex items-center gap-x-2 hover:text-red-500 hover: cursor-pointer"
        >
          <p>بازگشت به سایت</p>
          <Icon icon="ic:sharp-arrow-back" style={{ color: "black" }} />
        </Link>
      </div>
    </>
  );
}
