import React, {
  FC,
  forwardRef,
  InputHTMLAttributes,
  Ref,
  useContext,
} from "react";
import classNames from "classnames/bind";

import { ThemeContext } from "@/context";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  type?: string;
  error?: string;
  ref?: Ref<HTMLInputElement>;
}

const Input: FC<InputProps> = forwardRef((props, ref) => {
  const { theme } = useContext(ThemeContext);

  return (
    <input className={cx("input", `input-${theme}`)} ref={ref} {...props} />
  );
});

export default Input;
