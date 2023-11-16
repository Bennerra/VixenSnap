import { FC } from "react";
import classNames from "classnames/bind";

import { Header } from "@/modules/Header";
import { ImageCard } from "@/modules/ImageCard";
import { GridLayout } from "@/layouts/CardsLayout";
import Image from "@/assets/Rectangle 47.png";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const Home: FC = () => {
  return (
    <main className={cx("home")}>
      <Header />
      <div className={cx("container")}>
        <GridLayout>
          <ImageCard img={Image} title="Лисаа" likes="45" />
        </GridLayout>
      </div>
    </main>
  );
};

export default Home;
