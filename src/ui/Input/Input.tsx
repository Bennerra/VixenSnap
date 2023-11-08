import React, { FC, InputHTMLAttributes, useContext } from "react";
import classNames from "classnames/bind";

import { ThemeContext } from "@/context";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

const Input: FC<InputProps> = ({ placeholder, ...props }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <input
      className={cx("input", `input-${theme}`)}
      type="text"
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Input;
