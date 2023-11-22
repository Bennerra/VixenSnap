import { FC } from "react";
import classNames from "classnames/bind";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

interface ProfileImageProps {
  img: string | null | undefined;
  name: string;
  theme: string;
}

const ProfileImage: FC<ProfileImageProps> = ({ img, name, theme }) => {
  return (
    <div className={cx("profile-image")}>
      {img ? (
        <img className={cx("profile-image__img")} src={img} alt="Profile" />
      ) : (
        <div
          className={cx(
            "profile-image__empty",
            `profile-image__empty-${theme}`
          )}
        >
          {Array.from(name)[0]}
        </div>
      )}
    </div>
  );
};

export default ProfileImage;
