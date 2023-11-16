import { FC } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import { Button } from "@/ui/Button";
import { useAppSelector } from "@/hooks/redux";

import styles from "./styles.module.scss";

interface ButtonsListProps {
  size: "small" | "medium";
}

const cx = classNames.bind(styles);

const HeaderButtonsList: FC<ButtonsListProps> = ({ size }) => {
  const isAuth = useAppSelector((state) => state.isAuth.isAuth);

  return (
    <>
      <Link to="/">
        <div className={cx("button")}>
          <Button text="Главная" color="gray" size={size} />
        </div>
      </Link>
      {isAuth ? (
        <Link to="/creation">
          <div className={cx("button")}>
            <Button text="Создать" color="orange" size={size} />
          </div>
        </Link>
      ) : (
        <Link to="/login">
          <div className={cx("button")}>
            <Button text="Войти" color="orange" size={size} />
          </div>
        </Link>
      )}
    </>
  );
};

export default HeaderButtonsList;
