import { FC, PropsWithChildren } from "react";
import classNames from "classnames/bind";

import { ReactComponent as VK } from "@/assets/vk.svg";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

interface AuthorizationProps {
  title: string;
  text: string;
  link: string;
}

const Authorization: FC<PropsWithChildren<AuthorizationProps>> = ({
  title,
  link,
  text,
  children,
}) => {
  return (
    <div className={cx("authorization")}>
      <h1 className={cx("authorization__title")}>{title}</h1>
      <div className={cx("authorization__vk", "authorization-vk")}>
        <div className={cx("authorization-vk__text")}>Войти с помощью</div>
        <div className={cx("authorization-vk__img")}>
          <VK />
        </div>
      </div>
      <div className={cx("authorization__fields")}>{children}</div>
      <div className={cx("authorization__button")} />
      <div className={cx("authorization__link", "form-link")}>
        <div className={cx("form-link__title")}>{text}</div>
        <div className={cx("form-link__text")}>{link}</div>
      </div>
    </div>
  );
};

export default Authorization;
