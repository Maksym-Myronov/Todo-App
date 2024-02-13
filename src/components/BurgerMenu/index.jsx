import { useState } from 'react';
import images from '../../assets/images/Path_34201.svg'
import edit from '../../assets/images/Edit Square.svg'
//import Styles
import styles from './index.module.scss';

const BurgerMenu = () => {


    const [isOpen, setIsOpen] = useState(false)


    return (
        <div className={styles.main}>
            <div className={styles.main__btn}>
                <button className={styles.main__button} onClick={() => setIsOpen(!isOpen)}>+</button>
            </div>
            { isOpen && 
                <div className={styles.main__burger}>
                    <div className={styles.main__content}>
                        <div className={styles.main__edit}>
                            <img src={edit} alt="edit" />
                            <p className={styles.main__pharagraph}>Create task</p>
                        </div>
                        <button className={styles.main__img} onClick={() => setIsOpen(!isOpen)}><img src={images} alt="images" className={styles.main__images} /></button>
                    </div>
                    <div>
                        <h1 className={styles.main__write}>Text</h1>
                        
                    </div>
                    
                </div>
            }
        </div>
    )
}

export default BurgerMenu
