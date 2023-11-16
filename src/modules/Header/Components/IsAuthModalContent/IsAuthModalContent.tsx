import { Dispatch, FC, SetStateAction, useContext } from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import { ThemeContext } from "@/context";

import styles from "./styles.module.scss";

interface IsAuthModalProps {
  setIsOpenMenu: Dispatch<SetStateAction<boolean>>;
}

const cx = classNames.bind(styles);

const IsAuthModalContent: FC<IsAuthModalProps> = ({ setIsOpenMenu }) => {
  const { theme } = useContext(ThemeContext);
  const handleCloseMenu = () => {
    setIsOpenMenu(false);
  };

  return (
    <ul className={cx("menu-list", `menu-list-${theme}`)}>
      <li onClick={handleCloseMenu} className={cx("menu-list__item")}>
        Уведомления
      </li>
      <Link to="/">
        <li onClick={handleCloseMenu} className={cx("menu-list__item")}>
          Главная
        </li>
      </Link>
      <Link to="/creation">
        <li onClick={handleCloseMenu} className={cx("menu-list__item")}>
          Добавить
        </li>
      </Link>
    </ul>
  );
};

export default IsAuthModalContent;
