import { Dispatch, FC, SetStateAction, useContext } from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import { ThemeContext } from "@/context";

import { ReactComponent as Close } from "@/assets/close.svg";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

interface ModalMenuProps {
  isOpenMenu: boolean;
  setIsOpenMenu: Dispatch<SetStateAction<boolean>>;
}

const ModalMenu: FC<ModalMenuProps> = ({
  isOpenMenu = false,
  setIsOpenMenu,
}) => {
  const { theme } = useContext(ThemeContext);
  const handleCloseMenu = () => {
    setIsOpenMenu(false);
  };

  return (
    <div className={cx("modal-menu", `modal-menu-${theme}`)}>
      <ul className={cx("modal-menu__list", "menu-list", `menu-list-${theme}`)}>
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
      <div
        onClick={handleCloseMenu}
        className={cx("modal-menu__close", {
          open: isOpenMenu,
        })}
      >
        <Close />
      </div>
    </div>
  );
};

export default ModalMenu;
