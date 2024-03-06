import PostCard from "./PostCard";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectAllItemsFromTodo } from "../../../reducers/todosSlice.js";

const Card = ({
  currentItems,
  setNewText,
  setIdTitle,
  setCardsIsOpen,
  cardsIsOpen,
}) => {
  const allTodoArray = useSelector(selectAllItemsFromTodo);
  const [titles, setTitle] = useState(currentItems);

  useEffect(() => {
    // Оновлюємо стан titles при зміні allTodoArray
    setTitle(currentItems);
  }, [currentItems]);

  const handleSortCompleted = () => {
    const sortedItems = setTitle(
      currentItems.filter((item) => item.completed === true),
    );
  };

  const handleSortCurrent = () => {
    const sortedCurrent = setTitle(
      currentItems.filter((item) => item.completed === false),
    );
  };

  const handleSortAllTask = () => setTitle(currentItems);

  return (
    <div>
      <button onClick={handleSortCompleted}>Completed Task</button>
      <button onClick={handleSortCurrent}>Current Task</button>
      <button onClick={handleSortAllTask}>All Task</button>
      {titles &&
        titles.map((element) => (
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
  );
};

export default Card;
