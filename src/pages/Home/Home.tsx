import { FC } from "react";
import classNames from "classnames/bind";

import { Header } from "@/modules/Header";
import { ImageCard } from "@/modules/ImageCard";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const Home: FC = () => {
  return (
    <main className={cx("home")}>
      <Header />
      <div className={cx("container", "home__container")}>
        <ImageCard title="Лисаа" likes="45" />
      </div>
    </main>
  );
};

export default Home;
