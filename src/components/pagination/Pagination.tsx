import { Icon } from "@iconify/react";
import { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { DataContext } from "../../context/DataContext";

export default function Pagination({ isOrderPagination = false }) {
  const {
    setPage,
    page,
    totalPages = 1,
    setOrderPage,
    orderPage,
    orderTotalPages = 1,
  } = useContext(DataContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(
    searchParams.get(isOrderPagination ? "orderPage" : "page") || "1"
  );
  const navigate = useNavigate();

  const activePage = isOrderPagination ? orderPage : page;
  const activeSetPage = isOrderPagination ? setOrderPage : setPage;
  const activeTotalPages = isOrderPagination
    ? Number(orderTotalPages)
    : Number(totalPages);

  useEffect(() => {
    activeSetPage?.(currentPage.toString());
  }, [
    currentPage,
    activeSetPage,
    activeTotalPages,
    activePage,
    navigate,
    isOrderPagination,
  ]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= activeTotalPages) {
      activeSetPage?.(newPage.toString());
      searchParams.set(
        isOrderPagination ? "orderPage" : "page",
        newPage.toString()
      );
      setSearchParams(searchParams);
    }
  };

  return (
    <div className="join rounded-lg">
      <button
        className="join-item btn"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage >= activeTotalPages}
      >
        <Icon icon="ooui:next-ltr" style={{ color: "black" }} />
      </button>
      <button className="join-item btn">صفحه {currentPage}</button>
      <button
        className="join-item btn"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage <= 1}
      >
        <Icon icon="ooui:next-rtl" style={{ color: "black" }} />
      </button>
    </div>
  );
}
