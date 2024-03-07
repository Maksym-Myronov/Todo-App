import PostCard from "./PostCard";
import { useEffect, useState } from "react";
// Styles
import styles from "./index.module.scss";

const Card = ({
  currentItems,
  setNewText,
  setIdTitle,
  setCardsIsOpen,
  cardsIsOpen,
}) => {
  const [titles, setTitle] = useState(currentItems);
  const [elementsNotFound, setElementsNotFound] = useState("");

  useEffect(() => {
    setTitle([...currentItems]);
  }, [currentItems]);

  const handleSortCompleted = () => {
    const sortedItems = currentItems.filter((item) => item.completed === true);
    setTitle([...sortedItems]);
    setElementsNotFound("Completed");
  };

  const handleSortCurrent = () => {
    const sortedCurrent = currentItems.filter(
      (item) => item.completed === false,
    );
    setTitle([...sortedCurrent]);
    setElementsNotFound("Current");
  };

  const handleSortAllTask = () => {
    setTitle(currentItems);
    setElementsNotFound("");
  };

  return (
    <div>
      {titles.length > 0 ? (
        <div className={styles.cards}>
          <div className={styles.buttons}>
            <button
              className={styles.buttons__task}
              onClick={handleSortCompleted}
            >
              Completed Task
            </button>
            <button
              className={styles.buttons__task}
              onClick={handleSortCurrent}
            >
              Current Task
            </button>
            <button
              className={styles.buttons__task}
              onClick={handleSortAllTask}
            >
              All Task
            </button>
          </div>

          {titles.map((element) => (
            <PostCard
              key={element.id}
              id={element.id}
              title={element.title}
              completed={element.completed}
              setNewText={setNewText}
              setIdTitle={setIdTitle}
              setCardsIsOpen={setCardsIsOpen}
              cardsIsOpen={cardsIsOpen}
              currentItems={currentItems}
            />
          ))}
        </div>
      ) : (
        <div className={styles.attention}>
          <p
            className={styles.attention__text}
          >{`You don't have ${elementsNotFound} Tasks`}</p>
        </div>
      )}
    </div>
  );
};
export default Card;
