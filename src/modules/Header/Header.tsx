import React, { FC, useState } from "react";
import classNames from "classnames/bind";

import styles from "./styles.module.scss";

import { ProfileImage } from "../../ui/ProfileImage";
import { ReactComponent as Burger } from "../../assets/burger.svg";
import { ReactComponent as Notifications } from "../../assets/notifications.svg";
import { ProfileDropDown } from "./Components/ProfileDropDown";
import { ModalMenu } from "./Components/ModalMenu";
import { ButtonsList } from "./Components/ButtonsList";
import { HeaderLogo } from "./Components/HeaderLogo";
import { HeaderSearch } from "./Components/HeaderSearch";

const cx = classNames.bind(styles);

const Header: FC = () => {
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleIsOpenProfile = () => {
    setIsOpenProfile(!isOpenProfile);
  };

  const handleOpenMenu = () => {
    setIsOpenMenu(true);
  };

  return (
    <div className={cx("header")}>
      <div className={cx("header__container", "container")}>
        <HeaderLogo />
        <HeaderSearch />
        <div className={cx("header__buttons")}>
          <ButtonsList size="small" />
        </div>
        <div className={cx("header__buttons-desktop")}>
          <ButtonsList size="medium" />
        </div>
        <div className={cx("header__information", "header-information")}>
          <div className={cx("header-information__notifications")}>
            <Notifications />
          </div>
          <div className={cx("header-information__burger", "header-burger")}>
            <div onClick={handleOpenMenu} className={cx("header-burger__open")}>
              <Burger />
            </div>
            <div
              onClick={(e) => e.stopPropagation()}
              className={cx("header-burger__menu", {
                open: isOpenMenu,
              })}
            >
              <ModalMenu
                isOpenMenu={isOpenMenu}
                setIsOpenMenu={setIsOpenMenu}
              />
            </div>
          </div>
          <div
            onClick={toggleIsOpenProfile}
            className={cx("header-information__profile", "header-profile")}
          >
            <ProfileImage />
            <div
              className={cx("header-profile__dropdown", {
                open: isOpenProfile,
              })}
            >
              <ProfileDropDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
