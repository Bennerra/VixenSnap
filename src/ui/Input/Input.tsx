import React, { FC, InputHTMLAttributes } from "react";
import classNames from "classnames/bind";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

const Input: FC<InputProps> = ({ placeholder, ...props }) => (
  <input
    className={cx("input")}
    type="text"
    placeholder={placeholder}
    {...props}
  />
);

export default Input;
