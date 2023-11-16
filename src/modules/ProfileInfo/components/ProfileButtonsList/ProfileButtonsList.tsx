import { FC } from "react";
import classNames from "classnames/bind";

import { Button } from "@/ui/Button";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const ProfileButtonsList: FC = () => {
  return (
    <div className={cx("profile-info__buttons")}>
      <Button text="Изменить профиль" color="white" size="small" />
      <Button text="Поделиться" color="white" size="small" />
    </div>
  );
};

export default ProfileButtonsList;
