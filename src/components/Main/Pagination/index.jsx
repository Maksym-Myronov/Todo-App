// Image
import paginationOne from "../../../assets/images/First.svg";
import paginationTwo from "../../../assets/images/Prev.svg";
import paginationThree from "../../../assets/images/Next.svg";
import paginationFour from "../../../assets/images/Last.svg";
// Styles
import styles from "./index.module.scss";

const Pagination = ({
  handlePreviousPage,
  handleFirstPage,
  handleNextPage,
  handleLastPage,
  currentPage,
  totalPages,
}) => {
  return (
    <div>
      <div className={styles.main__pagination}>
        <button className={styles.main__btns} onClick={handleFirstPage}>
          <img src={paginationOne} alt="paginationFirst" />
        </button>
        <button className={styles.main__btns} onClick={handlePreviousPage}>
          <img src={paginationTwo} alt="paginationTwo" />
        </button>
        <p className={styles.main__number}>
          {currentPage}/{totalPages}
        </p>
        <button className={styles.main__btns} onClick={handleNextPage}>
          <img src={paginationThree} alt="paginationThree" />
        </button>
        <button className={styles.main__btns} onClick={handleLastPage}>
          <img src={paginationFour} alt="paginationFour" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
