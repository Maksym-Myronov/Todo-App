import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo } from "../reducers/todosSlice";

export const usePagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 7;
    const items = useSelector(state => state.todo.todos);
    const dispatch = useDispatch();
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = Array.isArray(items) ? items.slice(startIndex, endIndex) : null;
    
    useEffect(() => {
        dispatch(fetchTodo())
    }, [ dispatch]);

    const totalPages = Math.ceil(items && items.length  / itemsPerPage);

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

    return { currentItems, handlePreviousPage, handleFirstPage, handleNextPage, handleLastPage, currentPage, totalPages };
};