import { Icon } from "@iconify/react";
import { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DataContext } from "../../context/DataContext";

export default function Pagination() {
  const { setPage, totalPages = 1 } = useContext(DataContext);
  const { page: urlPage } = useParams<{ page: string }>();
  const navigate = useNavigate();

  const currentPage = parseInt(urlPage || "1");

  useEffect(() => {
    setPage?.(currentPage.toString());
  }, [currentPage, setPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      setPage?.(nextPage.toString());
      navigate(`/management/${nextPage}`);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      setPage?.(prevPage.toString());
      navigate(`/management/${prevPage}`);
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
