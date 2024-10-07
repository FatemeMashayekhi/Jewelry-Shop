import { Icon } from "@iconify/react";
import { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { DataContext } from "../../context/DataContext";

export default function Pagination() {
  const { setPage, totalPages = 1 } = useContext(DataContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1");

  useEffect(() => {
    setPage?.(currentPage.toString());
  }, [currentPage, setPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      setPage?.(nextPage.toString());
      searchParams.set("page", nextPage.toString());
      setSearchParams(searchParams);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      setPage?.(prevPage.toString());
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
