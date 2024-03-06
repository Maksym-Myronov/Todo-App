import { useSelector } from "react-redux";
import {
  selectAllItemsFromTodo,
  selectItemsCount,
} from "../../reducers/todosSlice";
// Images
import logo from "../../assets/images/Group 3.svg";
import document from "../../assets/images/Document.svg";
import doneTaskImage from "../../assets/images/icons8-complete-25.png";
// Styles
import styles from "./index.module.scss";

const SideBar = () => {
  const generalTodoLength = useSelector(selectItemsCount);
  const allTodoArray = useSelector(selectAllItemsFromTodo);
  const doneTask = allTodoArray.filter(
    (element) => element.completed === true,
  ).length;
  const currentTask = allTodoArray.filter(
    (element) => element.completed === false,
  ).length;

  return (
    <div className={styles.sideBar}>
      <div className={styles.sideBar__title}>
        <img src={logo} alt="logo" />
        <h1>To do list</h1>
      </div>
      <div className={styles.sideBar__task}>
        <h2>TASK</h2>
      </div>
      <div className={styles.sideBar__all}>
        <div className={styles.sideBar__block}>
          <img src={document} alt="document" />
          <p className={styles.sideBar__paragraph}>General tasks</p>
          <p className={styles.sideBar__number}>{generalTodoLength}</p>
        </div>
        <div className={styles.sideBar__block}>
          <img src={document} alt="doneTaskImage" />
          <p className={styles.sideBar__paragraph}>Completed tasks</p>
          <p className={styles.sideBar__number}>{doneTask}</p>
        </div>
        <div className={styles.sideBar__block}>
          <img src={document} alt="document" />
          <p className={styles.sideBar__paragraph}>Current tasks</p>
          <p className={styles.sideBar__number}>{currentTask}</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
