import { Outlet } from "react-router-dom";

export default function SecondaryLayout() {
  return (
    <>
      <div>SecondLayout</div>
      <Outlet />
    </>
  );
}
