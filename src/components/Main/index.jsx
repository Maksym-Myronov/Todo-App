import Pagination from './Pagination'
import BurgerMenu from '../BurgerMenu/index'
//import images
import category from '../../assets/images/Category.svg'
//import styles
import styles from './index.module.scss'
import Card from './Card'

const Main = () => {
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
                <Card />
                <Pagination />
            </div>
        </div>
    )
}

export default Main