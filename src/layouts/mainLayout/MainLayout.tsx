import { Outlet } from "react-router-dom";
import Upside from "../../components/mainLayout/Upside";
import Downside from "../../components/mainLayout/Downside";

export default function MainLayout() {
  return (
    <>
      <div className="px-10 py-4 flex flex-col gap-y-9">
        <Upside />
        <Downside />
      </div>
      <Outlet />
    </>
  );
}
