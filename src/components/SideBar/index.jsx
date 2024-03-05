import { useSelector } from "react-redux";
import { selectItemsCount } from "../../reducers/todosSlice";
// Images
import logo from "../../assets/images/Group 3.svg";
import document from "../../assets/images/Document.svg";
// Styles
import styles from "./index.module.scss";

const SideBar = () => {
  const todo = useSelector(selectItemsCount);

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
        <img src={document} alt="document" />
        <p className={styles.sideBar__paragraph}>
          General tasks<span className={styles.sideBar__number}>{todo}</span>
        </p>
      </div>
    </div>
  );
};

export default SideBar;
