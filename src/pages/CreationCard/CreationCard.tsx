import { FC, useContext } from "react";
import classNames from "classnames/bind";

import { ThemeContext } from "@/context";

import CreationCardForm from "@/modules/CreationCardForm/CreationCardForm";

import { Header } from "@/modules/Header";
import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const CreationCard: FC = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <main>
      <Header />
      <div className={cx("creation")}>
        <div className={cx("container")}>
          <h1 className={cx("creation__title", `creation__title-${theme}`)}>
            Создание новой карточки
          </h1>
          <CreationCardForm />
        </div>
      </div>
    </main>
  );
};

export default CreationCard;
