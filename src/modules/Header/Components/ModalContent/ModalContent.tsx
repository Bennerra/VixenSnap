import { Dispatch, FC, SetStateAction, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";

import { ThemeContext } from "@/context";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

interface ModalProps {
  setIsOpenMenu: Dispatch<SetStateAction<boolean>>;
}

const ModalContent: FC<ModalProps> = ({ setIsOpenMenu }) => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleCloseMenu = () => {
    setIsOpenMenu(false);
  };

  return (
    <ul className={cx("menu-list", `menu-list-${theme}`)}>
      <div onClick={() => navigate(0)}>
        <Link to="/">
          <li onClick={handleCloseMenu} className={cx("menu-list__item")}>
            Главная
          </li>
        </Link>
      </div>
      <Link to="/registration">
        <li onClick={handleCloseMenu} className={cx("menu-list__item")}>
          Зарегистрироваться
        </li>
      </Link>
      <Link to="/login">
        <li onClick={handleCloseMenu} className={cx("menu-list__item")}>
          Войти
        </li>
      </Link>
    </ul>
  );
};

export default ModalContent;
