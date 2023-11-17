import { FC } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import { Button } from "@/ui/Button";
import { useAppSelector } from "@/hooks/redux";
import { useResize } from "@/hooks/useResize";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const HeaderButtonsList: FC = () => {
  const isAuth = useAppSelector((state) => state.isAuth.isAuth);
  const { width } = useResize();

  return (
    <>
      <Link to="/">
        <div className={cx("button")}>
          <Button
            text="Главная"
            color="gray"
            size={width < 992 ? "small" : "medium"}
          />
        </div>
      </Link>
      {isAuth ? (
        <Link to="/creation">
          <div className={cx("button")}>
            <Button
              text="Создать"
              color="orange"
              size={width < 992 ? "small" : "medium"}
            />
          </div>
        </Link>
      ) : (
        <Link to="/login">
          <div className={cx("button")}>
            <Button
              text="Войти"
              color="orange"
              size={width < 992 ? "small" : "medium"}
            />
          </div>
        </Link>
      )}
    </>
  );
};

export default HeaderButtonsList;
