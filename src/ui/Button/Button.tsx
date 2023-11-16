import { ButtonHTMLAttributes, FC, useContext } from "react";
import classNames from "classnames/bind";

import { ThemeContext } from "@/context";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color: "gray" | "orange" | "white";
  size: "small" | "medium" | "big";
}

const Button: FC<ButtonProps> = ({
  text,
  color,
  size = "small",
  onClick,
  ...props
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      type="button"
      className={cx(
        "button",
        `button__${color}`,
        `button__${color}-${theme}`,
        `button__${size}`
      )}
      {...props}
    >
      <div className={cx("button__text")}>{text}</div>
    </button>
  );
};

export default Button;
