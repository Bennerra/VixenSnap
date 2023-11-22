import React, { FC, useContext, useState } from "react";
import classNames from "classnames/bind";
import { Link, useNavigate } from "react-router-dom";

import { ThemeContext } from "@/context";
import { useAppSelector } from "@/hooks/redux";

import { ProfileImage } from "@/ui/ProfileImage";
import { ReactComponent as Burger } from "@/assets/burger.svg";
import { ReactComponent as Notifications } from "@/assets/notifications.svg";
import { ModalMenuLayout } from "@/layouts/ModalMenuLayout";
import { IsAuthModalContent } from "@/modules/Header/Components/IsAuthModalContent";
import { ModalContent } from "@/modules/Header/Components/ModalContent";
import { OutsideClickHandler } from "@/modules/OutsideClickHandler";
import { ProfileDropDown } from "./Components/ProfileDropDown";
import { HeaderButtonsList } from "./Components/HeaderButtonsList";
import { HeaderLogo } from "./Components/HeaderLogo";
import { HeaderSearch } from "./Components/HeaderSearch";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const Header: FC = () => {
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const isAuth = useAppSelector((state) => state.isAuth.isAuth);
  const { theme } = useContext(ThemeContext);
  const { avatar, name } = useAppSelector((state) => state.user.userMeInfo);
  const navigate = useNavigate();

  const toggleIsOpenProfile = () => {
    setIsOpenProfile(!isOpenProfile);
  };

  const closeIsOpenProfile = () => {
    setIsOpenProfile(false);
  };

  const handleOpenMenu = () => {
    setIsOpenMenu(true);
  };

  return (
    <div className={cx("header", `header-${theme}`)}>
      <div
        className={cx(
          "header__container",
          "container",
          `header__container-${theme}`
        )}
      >
        <div onClick={() => navigate(0)}>
          <Link to="/">
            <HeaderLogo />
          </Link>
        </div>
        <HeaderSearch />
        <div className={cx("header__buttons")}>
          <HeaderButtonsList />
        </div>
        {isAuth ? (
          <div className={cx("header__information", "header-information")}>
            <div className={cx("header-information__notifications")}>
              <Notifications />
            </div>
            <div className={cx("header-information__burger", "header-burger")}>
              <div
                onClick={handleOpenMenu}
                className={cx("header-burger__open")}
              >
                <Burger />
              </div>
              <div
                onClick={(e) => e.stopPropagation()}
                className={cx("header-burger__menu", {
                  open: isOpenMenu,
                })}
              >
                <ModalMenuLayout
                  isOpenMenu={isOpenMenu}
                  setIsOpenMenu={setIsOpenMenu}
                >
                  <IsAuthModalContent setIsOpenMenu={setIsOpenMenu} />
                </ModalMenuLayout>
              </div>
            </div>
            <OutsideClickHandler onOutsideClick={closeIsOpenProfile}>
              <div
                onClick={toggleIsOpenProfile}
                className={cx("header-information__profile", "header-profile")}
              >
                <ProfileImage theme={theme} name={name} img={avatar} />
                <div
                  className={cx("header-profile__dropdown", {
                    open: isOpenProfile,
                  })}
                >
                  <ProfileDropDown />
                </div>
              </div>
            </OutsideClickHandler>
          </div>
        ) : (
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
              <ModalMenuLayout
                isOpenMenu={isOpenMenu}
                setIsOpenMenu={setIsOpenMenu}
              >
                <ModalContent setIsOpenMenu={setIsOpenMenu} />
              </ModalMenuLayout>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
