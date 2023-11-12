import { FC } from "react";
import classNames from "classnames/bind";

import { Header } from "@/modules/Header";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const Home: FC = () => {
  return (
    <main className={cx("home")}>
      <Header />
    </main>
  );
};

export default Home;
