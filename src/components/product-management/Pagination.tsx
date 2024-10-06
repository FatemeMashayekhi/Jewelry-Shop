import { Icon } from "@iconify/react";
import { useContext } from "react";
import { DataContext } from "../../context/context";

export default function Pagination() {
  const { page, setPage, totalPages = 1 } = useContext(DataContext); // Default value for totalPages

  const handleNextPage = () => {
    if (page && parseInt(page) < totalPages) {
      setPage?.((prevPage) => (parseInt(prevPage) + 1).toString());
    }
  };

  const handlePrevPage = () => {
    if (page && page !== "1") {
      setPage?.((prevPage) => (parseInt(prevPage) - 1).toString());
    }
  };

  return (
    <div className="join rounded-lg">
      <button className="join-item btn" onClick={handleNextPage}>
        <Icon icon="ooui:next-ltr" style={{ color: "black" }} />
      </button>
      <button className="join-item btn">صفحه {page}</button>
      <button className="join-item btn" onClick={handlePrevPage}>
        <Icon icon="ooui:next-rtl" style={{ color: "black" }} />
      </button>
    </div>
  );
}
