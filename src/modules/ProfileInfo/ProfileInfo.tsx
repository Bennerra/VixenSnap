import { FC, useContext, useEffect } from "react";
import classNames from "classnames/bind";

import { ThemeContext } from "@/context";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";

import { ProfileButtonsList } from "@/modules/ProfileInfo/components/ProfileButtonsList";

import { getUserMe } from "@/api/userMe";
import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

interface ProfileInfoProps {
  subscribers?: string;
  subscription?: string;
}

const ProfileInfo: FC<ProfileInfoProps> = ({
  subscribers = "0",
  subscription = "0",
}) => {
  const dispatch = useAppDispatch();
  const { theme } = useContext(ThemeContext);
  const { avatar, name } = useAppSelector((state) => state.user.userMeInfo);

  useEffect(() => {
    getUserMe(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={cx("profile-info", `profile-info-${theme}`)}>
      <div className={cx("profile-info__img")}>
        {avatar ? <img src={avatar} alt="" /> : Array.from(name)[0]}
      </div>
      <div className={cx("profile-info__name")}>{name}</div>
      <div
        className={cx(
          "profile-info__description",
          `profile-info__description-${theme}`,
          "info-description"
        )}
      >
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
