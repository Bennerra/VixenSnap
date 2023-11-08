import { Dispatch, FC, SetStateAction, useContext } from "react";
import classNames from "classnames/bind";

import { ThemeContext } from "@/context";

import { ReactComponent as Close } from "@/assets/close.svg";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const menuItems: string[] = ["Уведомления", "Главная", "Добавить"];

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
      <ul className={cx("modal-menu__list", "menu-list")}>
        {menuItems.map((item) => (
          <li key={item} className={cx("menu-list__item")}>
            {item}
          </li>
        ))}
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
