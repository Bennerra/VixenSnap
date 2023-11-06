import React, { ButtonHTMLAttributes, FC } from "react";
import classNames from "classnames/bind";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color: "gray" | "orange";
  size: "small" | "medium" | "big";
}

const Button: FC<ButtonProps> = ({ text, color, size = "small", ...props }) => {
  return (
    <button
      type="button"
      className={cx("button", `button__${color}`, `button__${size}`)}
      {...props}
    >
      <div className={cx("button__text")}>{text}</div>
    </button>
  );
};

export default Button;
