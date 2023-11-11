import React, { FC, forwardRef, InputHTMLAttributes, Ref } from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  theme: string;
  type?: string;
  error?: string;
  cancelled?: boolean;
  ref?: Ref<HTMLInputElement>;
}

const Input: FC<InputProps> = forwardRef(
  ({ placeholder, theme, type, error, cancelled, ...props }, ref) => (
    <input
      className={cx("input", `input-${theme}`, { error }, { cancelled })}
      ref={ref}
      placeholder={placeholder}
      type={type}
      {...props}
    />
  )
);

export default Input;
