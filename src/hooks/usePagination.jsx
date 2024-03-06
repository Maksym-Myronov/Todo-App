import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const usePagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const elementTodo = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems =
    Array.isArray(elementTodo) && elementTodo.slice(startIndex, endIndex);

  const totalPages = Math.ceil(
    elementTodo && elementTodo.length / itemsPerPage,
  );

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleFirstPage = () => {
    if (currentPage > 1) {
      setCurrentPage(Math.max(1, currentPage - 10));
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleLastPage = () => {
    if (currentPage === 1) {
      setCurrentPage(Math.min(totalPages, currentPage + 9));
    } else if (currentPage < totalPages) {
      setCurrentPage(Math.min(totalPages, currentPage + 10));
    }
  };

  return {
    currentItems,
    handlePreviousPage,
    handleFirstPage,
    handleNextPage,
    handleLastPage,
    currentPage,
    totalPages,
  };
};
