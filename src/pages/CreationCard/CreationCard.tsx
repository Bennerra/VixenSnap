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
        <h1 className={cx("creation__title", `creation__title-${theme}`)}>
          Создание новой карточки
        </h1>
        <CreationCardForm />
      </div>
    </main>
  );
};

export default CreationCard;
