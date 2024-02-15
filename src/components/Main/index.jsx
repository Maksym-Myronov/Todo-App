import Pagination from './Pagination'
import BurgerMenu from '../BurgerMenu/index'
//import images
import category from '../../assets/images/Category.svg'
//import styles
import styles from './index.module.scss'
import Card from './Card'
import { usePagination } from '../../hooks/usePagination'

const Main = () => {

    const { currentItems, handlePreviousPage, handleFirstPage, handleNextPage, handleLastPage, currentPage, totalPages } = usePagination();

    return (
        <div className={styles.main}>
            <div className={styles.main__container}>
                <div className={styles.main__title}>
                    <img src={category} alt="category" />
                    <h1>Recents</h1>
                </div>
                <div>
                    <BurgerMenu />
                </div>
            </div>
            <div>
                <Card currentItems={currentItems} />
                <Pagination
                    handlePreviousPage={handlePreviousPage}
                    handleFirstPage={handleFirstPage}
                    handleNextPage={handleNextPage}
                    handleLastPage={handleLastPage}
                    currentPage={currentPage}
                    totalPages={totalPages}
                />
            </div>
        </div>
    )
}

export default Main