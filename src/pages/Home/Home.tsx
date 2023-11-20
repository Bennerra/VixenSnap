import { FC } from "react";
import classNames from "classnames/bind";

import { Header } from "@/modules/Header";
import { CardsInfiniteScroll } from "@/modules/CardsInfiniteScroll";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const Home: FC = () => {
  return (
    <main className={cx("home")}>
      <Header />
      <div className={cx("container")}>
        <div className={cx("home__cards-list")}>
          <CardsInfiniteScroll />
        </div>
      </div>
    </main>
  );
};

export default Home;
