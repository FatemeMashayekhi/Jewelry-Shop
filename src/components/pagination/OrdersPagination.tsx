import { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import { Icon } from "@iconify/react";

export default function OrdersPagination() {
  const {
    orderTotalPages = 1,
    setOrderPage,
    orderPage,
  } = useContext(DataContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1");
  const navigate = useNavigate();

  useEffect(() => {
    setOrderPage?.(currentPage.toString());
  }, [currentPage, setOrderPage, orderTotalPages, orderPage, navigate]);

  const handleNextPage = () => {
    if (currentPage < Number(orderTotalPages)) {
      const nextPage = currentPage + 1;
      setOrderPage?.(nextPage.toString());
      searchParams.set("page", nextPage.toString());
      setSearchParams(searchParams);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      setOrderPage?.(prevPage.toString());
      searchParams.set("page", prevPage.toString());
      setSearchParams(searchParams);
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
