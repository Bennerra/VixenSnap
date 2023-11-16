import { FC, useContext } from "react";
import classNames from "classnames/bind";

import { ThemeContext } from "@/context";

import { ProfileButtonsList } from "@/modules/ProfileInfo/components/ProfileButtonsList";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

interface ProfileInfoProps {
  img?: string;
  name?: string;
  subscribers?: string;
  subscription?: string;
}

const ProfileInfo: FC<ProfileInfoProps> = ({
  img,
  name = "Настя",
  subscribers = "0",
  subscription = "0",
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={cx("profile-info", `profile-info-${theme}`)}>
      <div className={cx("profile-info__img")}>
        {img ? <img src={img} alt="" /> : Array.from(name)[0]}
      </div>
      <div className={cx("profile-info__name")}>{name}</div>
      <div className={cx("profile-info__description", "info-description")}>
        <div className={cx("info-description__subscribers")}>
          {subscribers} подписчиков
        </div>
        <div className={cx("info-description__subscription")}>
          {subscription} подписчиков
        </div>
      </div>
      <ProfileButtonsList />
    </div>
  );
};

export default ProfileInfo;
