import { Outlet } from "react-router";
import Header from "../Header/Header";
import styles from "./layout.module.scss";
import type { FC } from "react";

const Layout: FC = () => {
  return (
    <div className={styles.root}>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
