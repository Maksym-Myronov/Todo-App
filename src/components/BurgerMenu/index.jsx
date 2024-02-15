import { useState } from 'react';
import images from '../../assets/images/Path_34201.svg'
import edit from '../../assets/images/Edit Square.svg'
//import Styles
import styles from './index.module.scss';
import { useDispatch } from 'react-redux';
import { addNewTask } from '../../reducers/todosSlice';

const BurgerMenu = () => {

    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false)
    const [newText, setNewText] = useState("")

    const handleCreateTask = (text) => {
        if(newText.trim() === "") {
            alert("You cannot enter an empty line")
            return
        }

        dispatch(addNewTask(text))
        setIsOpen(false)
        setNewText("")
    }

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
                        <textarea 
                            type="text" 
                            placeholder='Write Your Task'
                            maxLength={100}
                            className={`${styles.main__input} ${newText.length >= 100 ? styles.main__helperRed : styles.main__helperBlack}`}
                            value={newText}
                            onChange={(e) => setNewText(e.target.value)}
                        />
                        <p className={`${styles.main__helper} ${newText.length >= 100 ? styles.main__helperText : styles.main__helperTexts}`}>Helper Text <span>{newText.length}/100</span></p>
                    </div>
                    <div className={styles.main__create}>
                        <button className={styles.main__firstBtn} onClick={() => handleCreateTask({title: newText, completed: false})}>Create</button>
                        <button className={styles.main__secondBtn}>Clear</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default BurgerMenu
