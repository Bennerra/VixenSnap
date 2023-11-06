import React, { FC, ReactComponentElement } from "react";
import classNames from "classnames/bind";

import styles from "./styles.module.scss";

import { ReactComponent as Profile } from "@/assets/profile.svg";
import { ReactComponent as Theme } from "@/assets/theme.svg";
import { ReactComponent as Exit } from "@/assets/exit.svg";

const cx = classNames.bind(styles);

interface ProfileItem {
  img: ReactComponentElement<any>;
  text: string;
}

const profileItems: ProfileItem[] = [
  { img: <Profile />, text: "Личный кабинет" },
  { img: <Theme />, text: "Сменить на тёмную тему" },
  { img: <Exit />, text: "Выйти" },
];

const ProfileDropDown: FC = () => {
  return (
    <div className={cx("profile-dropdown")}>
      <ul className={cx("profile-dropdown__menu")}>
        {profileItems.map((item) => (
          <li key={item.text} className={cx("profile-dropdown__item")}>
            {item.img}
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileDropDown;
