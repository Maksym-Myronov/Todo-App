import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTask, toggleCompleted } from "../../../../reducers/todosSlice";
import Input from "../Input";
// Images
import Edit from "../../../../assets/images/Edit Square.svg";
import Trash from "../../../../assets/images/Vector (1).svg";
// Styles
import styles from "./index.module.scss";

const PostCard = ({
  id,
  title,
  completed,
  setNewText,
  setIdTitle,
  setCardsIsOpen,
  cardsIsOpen,
}) => {
  const dispatch = useDispatch();
  const [complete, setComplete] = useState(completed);

  const handleChangeTodoText = (id) => {
    setNewText(title);
    setIdTitle(id);
    setCardsIsOpen(!cardsIsOpen);
  };

  const handleChange = () => {
    setComplete(!complete);
    dispatch(toggleCompleted({ id }));
  };

  const handleRemove = () => {
    dispatch(removeTask(id));
  };

  return (
    <div className={styles.card}>
      <div className={styles.card__container}>
        <div className={styles.card__checked}>
          <Input value={complete} onChange={handleChange} />
          <p
            style={
              complete
                ? { textDecoration: "line-through", color: "blue" }
                : undefined
            }
            className={styles.card__title}
            onClick={() => handleChange()}
          >
            {title}
          </p>
        </div>
        <div className={styles.card__edit}>
          <div className={styles.card__btn}>
            <button
              className={styles.card__button}
              onClick={() => handleChangeTodoText(id)}
            >
              <img src={Edit} alt="edit" />
            </button>
            <button className={styles.card__buttons} onClick={handleRemove}>
              <img src={Trash} alt="trash" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
