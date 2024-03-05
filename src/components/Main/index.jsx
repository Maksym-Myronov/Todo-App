import BurgerMenu from "../BurgerMenu/index";
import Card from "./Card";
import { usePagination } from "../../hooks/usePagination";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addNewTask, changeTodos } from "../../reducers/todosSlice.js";
// Images
import category from "../../assets/images/Category.svg";
// Styles
import styles from "./index.module.scss";

const Main = () => {
  const { currentItems } = usePagination();

  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [cardsIsOpen, setCardsIsOpen] = useState(false);
  const [newText, setNewText] = useState("");
  const [idTitle, setIdTitle] = useState(0);

  const handleCreateTask = (text) => {
    if (newText.trim() === "") {
      alert("You cannot enter an empty line");
      return;
    }

    dispatch(addNewTask(text));
    setIsOpen(false);
    setNewText("");
  };

  const handleClearInputField = () => {
    setNewText("");
  };

  return (
    <div className={styles.main}>
      <div className={styles.main__container}>
        <div className={styles.main__title}>
          <img src={category} alt="category" />
          <h1>Recent</h1>
        </div>
        <div>
          <div>
            <button
              className={styles.main__button}
              onClick={() => setIsOpen(!isOpen)}
            >
              +
            </button>
          </div>
          {(isOpen || cardsIsOpen) && (
            <BurgerMenu
              setIsOpen={setIsOpen}
              isOpen={isOpen}
              setNewText={setNewText}
              newText={newText}
              handleClearInputField={handleClearInputField}
              handleCreateTask={handleCreateTask}
              idTitle={idTitle}
              setCardsIsOpen={setCardsIsOpen}
              cardsIsOpen={cardsIsOpen}
            />
          )}
        </div>
      </div>
      <div>
        <Card
          currentItems={currentItems}
          setNewText={setNewText}
          setIdTitle={setIdTitle}
          setCardsIsOpen={setCardsIsOpen}
          cardsIsOpen={cardsIsOpen}
        />
      </div>
    </div>
  );
};

export default Main;
