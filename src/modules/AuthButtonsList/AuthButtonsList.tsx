import { FC } from "react";
import { Button } from "@/ui/Button";
import classNames from "classnames/bind";

import { useResize } from "@/hooks/useResize";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

interface AuthButtonsListProps {
  text: string;
  onClick?: () => void;
}

const AuthButtonsList: FC<AuthButtonsListProps> = ({ text, onClick }) => {
  const { width } = useResize();

  return (
    <div onClick={onClick} className={cx("button-list")}>
      <div className={cx("button-list__button", "button-list__button-mobile")}>
        <Button
          type="submit"
          text={text}
          color="orange"
          size={width < 768 ? "medium" : "big"}
        />
      </div>
    </div>
  );
};

export default AuthButtonsList;
