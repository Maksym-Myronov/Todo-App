// Images
import images from "../../assets/images/Path_34201.svg";
import edit from "../../assets/images/Edit Square.svg";
// Styles
import styles from "./index.module.scss";
import { changeTodos } from "../../reducers/todosSlice.js";
import { useDispatch } from "react-redux";

const BurgerMenu = ({
  setIsOpen,
  isOpen,
  setNewText,
  newText,
  handleClearInputField,
  handleCreateTask,
  cardsIsOpen,
  setCardsIsOpen,
  idTitle,
}) => {
  const dispatch = useDispatch();

  const newFunc = () => {
    setNewText("");
    dispatch(changeTodos({ id: idTitle, newText }));
    setCardsIsOpen(!cardsIsOpen);
  };

  return (
    <div className={styles.main}>
      <div className={styles.main__burger}>
        <div className={styles.main__content}>
          <div className={styles.main__edit}>
            <img src={edit} alt="edit" />
            <p className={styles.main__pharagraph}>Create task</p>
          </div>
          {isOpen ? (
            <button
              className={styles.main__img}
              onClick={() => setIsOpen(!isOpen)}
            >
              <img src={images} alt="images" className={styles.main__images} />
            </button>
          ) : (
            <button
              className={styles.main__img}
              onClick={() => setCardsIsOpen(!cardsIsOpen)}
            >
              <img src={images} alt="images" className={styles.main__images} />
            </button>
          )}
        </div>
        <div>
          <h1 className={styles.main__write}>Text</h1>
          <textarea
            placeholder="Write Your Task"
            maxLength={100}
            className={`${styles.main__input} ${newText.length >= 100 ? styles.main__helperRed : styles.main__helperBlack}`}
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <p
            className={`${styles.main__helper} ${newText.length >= 100 && styles.main__helperText}`}
          >
            Helper Text <span>{newText.length}/100</span>
          </p>
        </div>
        <div className={styles.main__create}>
          {isOpen ? (
            <button
              className={styles.main__firstBtn}
              onClick={() =>
                handleCreateTask({ title: newText, completed: false })
              }
            >
              Create
            </button>
          ) : (
            <button className={styles.main__firstBtn} onClick={() => newFunc()}>
              Change Text
            </button>
          )}
          <button
            className={styles.main__secondBtn}
            onClick={handleClearInputField}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
