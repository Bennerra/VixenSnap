import { FC, useContext } from "react";
import classNames from "classnames/bind";

import { useResize } from "@/hooks/useResize";
import { ThemeContext } from "@/context";

import { Button } from "@/ui/Button";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const ProfileButtonsList: FC = () => {
  const { theme } = useContext(ThemeContext);
  const { width } = useResize();

  return (
    <div className={cx("profile-info__buttons")}>
      <Button
        text="Изменить профиль"
        color="white"
        theme={theme}
        size={width < 992 ? "small" : "medium"}
      />
      <Button
        text="Поделиться"
        color="white"
        theme={theme}
        size={width < 992 ? "small" : "medium"}
      />
    </div>
  );
};

export default ProfileButtonsList;
