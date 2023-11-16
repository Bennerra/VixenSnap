import { Dispatch, FC, ReactNode, SetStateAction, useContext } from "react";
import classNames from "classnames/bind";

import { ThemeContext } from "@/context";

import { ReactComponent as Close } from "@/assets/close.svg";

import styles from "./styles.module.scss";

interface ModalMenuProps {
  isOpenMenu: boolean;
  setIsOpenMenu: Dispatch<SetStateAction<boolean>>;
  children: ReactNode | ReactNode[];
}

const cx = classNames.bind(styles);

const ModalMenuLayout: FC<ModalMenuProps> = ({
  isOpenMenu = false,
  setIsOpenMenu,
  children,
}) => {
  const { theme } = useContext(ThemeContext);
  const handleCloseMenu = () => {
    setIsOpenMenu(false);
  };

  return (
    <div className={cx("modal-menu", `modal-menu-${theme}`)}>
      {children}
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

export default ModalMenuLayout;
