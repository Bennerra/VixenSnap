import React, { FC } from "react";
import classNames from "classnames/bind";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

interface ProfileImageProps {
  img?: string;
}

const ProfileImage: FC<ProfileImageProps> = ({ img }) => {
  return (
    <div className={cx("profile-image")}>
      {img ? (
        <img className={cx("profile-image__img")} src={img} alt="Profile" />
      ) : (
        <div className={cx("profile-image__empty")} />
      )}
    </div>
  );
};

export default ProfileImage;
