import { FC, useContext } from "react";
import classNames from "classnames/bind";

import { ThemeContext } from "@/context";

import { ReactComponent as Profile } from "@/assets/profile.svg";
import { ReactComponent as Theme } from "@/assets/theme.svg";
import { ReactComponent as Exit } from "@/assets/exit.svg";
import { ProfileItem } from "@/modules/Header/Components/ProfileItem";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const ProfileDropDown: FC = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <div className={cx("profile-dropdown", `profile-dropdown-${theme}`)}>
      <ul className={cx("profile-dropdown__menu")}>
        <ProfileItem text="Личный кабинет" img={<Profile />} />
        <ProfileItem
          text={
            theme === "light"
              ? "Сменить на тёмную тему"
              : "Сменить на светлую тему"
          }
          img={<Theme />}
          onClick={toggleTheme}
        />
        <ProfileItem text="Выйти" img={<Exit />} />
      </ul>
    </div>
  );
};

export default ProfileDropDown;
