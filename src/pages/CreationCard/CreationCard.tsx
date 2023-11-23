import { FC, useContext } from "react";
import classNames from "classnames/bind";
import { Navigate } from "react-router-dom";

import { ThemeContext } from "@/context";
import { useAppSelector } from "@/hooks/redux";

import { CreationCardForm } from "@/modules/CreationCardForm";
import { Header } from "@/modules/Header";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const CreationCard: FC = () => {
  const { theme } = useContext(ThemeContext);
  const isAuth = useAppSelector((state) => state.isAuth.isAuth);

  return (
    <main className={cx("creation")}>
      {!isAuth && <Navigate to="/" replace />}
      <Header />
      <div className={cx("container")}>
        <div className={cx("creation__content", "creation-content")}>
          <h1
            className={cx(
              "creation-content__title",
              `creation-content__title-${theme}`
            )}
          >
            Создание новой карточки
          </h1>
          <CreationCardForm />
        </div>
      </div>
    </main>
  );
};

export default CreationCard;
