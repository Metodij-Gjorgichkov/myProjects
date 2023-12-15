import { ProductsType } from "@/types/types";
import React from "react";

interface PaginationProps {
  currentProducts: ProductsType[];
  currentPage: number;
  totalPages: number;
  prevPage: () => void;
  nextPage: () => void;
  changeCurrentPage: (id: number) => void;
}

const Pagination = ({
  currentProducts,
  currentPage,
  totalPages,
  prevPage,
  nextPage,
  changeCurrentPage,
}: PaginationProps) => {
  return (
    <div
      className="col-12 text-center py-3 font-size-30"
      style={{ fontSize: "25px" }}
    >
      <ul className="cormorant-garamond-font font-weight-400 d-flex justify-content-center align-items-center">
        {currentProducts.length === 0 ? (
          ""
        ) : (
          <li className="mr-2" onClick={prevPage}>
            &lt;
          </li>
        )}
        {Array.from({ length: totalPages }, (_, index) => (
          <li
            key={index + 1}
            className={`page-item  mr-2 ${
              currentPage === index + 1 ? "activePagePagination" : ""
            }`}
            onClick={() => changeCurrentPage(index + 1)}
          >
            {index + 1}{" "}
            {index !== totalPages - 1 && (
              <img src="../icons/circle.png" alt="circle" className="circle" />
            )}
          </li>
        ))}
        {currentProducts.length === 0 ? "" : <li onClick={nextPage}>&gt;</li>}
      </ul>
    </div>
  );
};

export default Pagination;
