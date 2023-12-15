import { ProductsType } from "@/types/types";
import React, { useState } from "react";

const usePagination = (totalItems: ProductsType[], itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(totalItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = totalItems.slice(startIndex, endIndex);

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const changeCurrentPage = (id: number) => {
    setCurrentPage(id);
  };

  return {
    currentPage,
    totalPages,
    currentProducts,
    prevPage,
    nextPage,
    changeCurrentPage,
    setCurrentPage,
  };
};

export default usePagination;
