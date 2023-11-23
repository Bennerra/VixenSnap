import { FC, useContext } from "react";
import classNames from "classnames/bind";

import { useResize } from "@/hooks/useResize";
import { ThemeContext } from "@/context";

import { Button } from "@/ui/Button";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

interface AuthButtonsListProps {
  text: string;
}

const AuthButtonsList: FC<AuthButtonsListProps> = ({ text }) => {
  const { theme } = useContext(ThemeContext);
  const { width } = useResize();

  return (
    <div className={cx("button-list")}>
      <div className={cx("button-list__button", "button-list__button-mobile")}>
        <Button
          type="submit"
          text={text}
          color="orange"
          theme={theme}
          size={width < 768 ? "medium" : "big"}
        />
      </div>
    </div>
  );
};

export default AuthButtonsList;
