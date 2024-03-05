import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
//import styles
import styles from "./index.module.scss";

const Layout = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.layout__component}>
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
