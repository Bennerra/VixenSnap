import React, { FC, ReactComponentElement, useContext } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import { ThemeContext } from "@/context";

import styles from "./styles.module.scss";

interface ProfileItemProps {
  img?: ReactComponentElement<any>;
  text: string;
  onClick?: () => void;
}

const cx = classNames.bind(styles);

const ProfileItem: FC<ProfileItemProps> = ({ img, text, onClick }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <li onClick={onClick}>
      {text === "Личный кабинет" ? (
        <Link to="/profile">
          <span className={cx("profile-item", `profile-item-${theme}`)}>
            {img}
            {text}
          </span>
        </Link>
      ) : (
        <span className={cx("profile-item", `profile-item-${theme}`)}>
          {img}
          {text}
        </span>
      )}
    </li>
  );
};

export default ProfileItem;
