import { usePagination } from "../../../hooks/usePagination";
import PostCard from "./PostCard";

const Card = () => {    
    const {currentItems, handlePreviousPage, handleFirstPage, handleNextPage, handleLastPage, currentPage, totalPages} = usePagination()
    console.log(currentItems);
    return (
        <div>
            {currentItems && currentItems.map((item) => (
                <PostCard key={item.id} title={item.title} completed={item.completed} />
            ))}
        </div>
    );
};

export default Card;
