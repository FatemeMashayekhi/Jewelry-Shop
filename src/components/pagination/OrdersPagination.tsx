import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { Icon } from "@iconify/react";

export default function OrdersPagination() {
  const {
    orderTotalPages = 1,
    setOrderPage,
    orderPage,
  } = useContext(DataContext);

  const currentPage = parseInt(orderPage || "1");
  const totalPages = parseInt(orderTotalPages.toString());

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      setOrderPage?.(nextPage.toString());
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      setOrderPage?.(prevPage.toString());
    }
  };

  return (
    <div className="join rounded-lg">
      <button className="join-item btn" onClick={handleNextPage}>
        <Icon icon="ooui:next-ltr" style={{ color: "black" }} />
      </button>
      <button className="join-item btn">صفحه {currentPage}</button>
      <button className="join-item btn" onClick={handlePrevPage}>
        <Icon icon="ooui:next-rtl" style={{ color: "black" }} />
      </button>
    </div>
  );
}
