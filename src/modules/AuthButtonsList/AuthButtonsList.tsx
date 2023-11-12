import { FC } from "react";
import { Button } from "@/ui/Button";
import classNames from "classnames/bind";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

interface AuthButtonsListProps {
  text: string;
}

const AuthButtonsList: FC<AuthButtonsListProps> = ({ text }) => {
  return (
    <div className={cx("button-list")}>
      <div className={cx("button-list__button", "button-list__button-mobile")}>
        <Button type="submit" text={text} color="orange" size="medium" />
      </div>
      <div className={cx("button-list__button", "button-list__button-desktop")}>
        <Button type="submit" text={text} color="orange" size="big" />
      </div>
    </div>
  );
};

export default AuthButtonsList;