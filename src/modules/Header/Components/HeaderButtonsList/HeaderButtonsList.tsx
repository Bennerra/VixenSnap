import { FC, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";

import { Button } from "@/ui/Button";
import { useAppSelector } from "@/hooks/redux";
import { useResize } from "@/hooks/useResize";

import { ThemeContext } from "@/context";
import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const HeaderButtonsList: FC = () => {
  const isAuth = useAppSelector((state) => state.isAuth.isAuth);
  const { theme } = useContext(ThemeContext);
  const { width } = useResize();
  const navigate = useNavigate();

  return (
    <>
      <div onClick={() => navigate(0)}>
        <Link to="/">
          <div className={cx("button")}>
            <Button
              text="Главная"
              color="gray"
              theme={theme}
              size={width < 992 ? "small" : "medium"}
            />
          </div>
        </Link>
      </div>
      {isAuth ? (
        <Link to="/creation">
          <div className={cx("button")}>
            <Button
              text="Создать"
              color="orange"
              theme={theme}
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
              theme={theme}
              size={width < 992 ? "small" : "medium"}
            />
          </div>
        </Link>
      )}
    </>
  );
};

export default HeaderButtonsList;
