import React from "react";
import { Icon } from "@iconify/react";

interface GroupPaginationProps {
  itemsPerPage: number;
  totalItems: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

const GroupPagination: React.FC<GroupPaginationProps> = ({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
}) => {
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < pageCount) {
      paginate(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  return (
    <div className="join rounded-lg">
      <button
        className="join-item btn"
        onClick={handleNextPage}
        disabled={currentPage >= pageCount}
      >
        <Icon icon="ooui:next-ltr" style={{ color: "black" }} />
      </button>
      <button className="join-item btn">صفحه {currentPage}</button>
      <button
        className="join-item btn"
        onClick={handlePrevPage}
        disabled={currentPage <= 1}
      >
        <Icon icon="ooui:next-rtl" style={{ color: "black" }} />
      </button>
    </div>
  );
};

export default GroupPagination;
