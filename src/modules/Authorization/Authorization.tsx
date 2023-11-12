import { FC, PropsWithChildren } from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import { ReactComponent as VK } from "@/assets/vk.svg";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

interface AuthorizationProps {
  title: string;
  text: string;
  link: "Зарегистрироваться" | "Войти";
}

const oauthUrl = process.env.REACT_APP_OAUTH_URL;
const clientId = process.env.REACT_APP_CLIENT_ID;
const redirectUri = process.env.REACT_APP_REDIRECT_URI;

const Authorization: FC<PropsWithChildren<AuthorizationProps>> = ({
  title,
  link,
  text,
  children,
}) => {
  const url = window.location.hash;
  const regex = /access_token=([a-z0-9.A-Z_\-\]?@';:]+)/;
  const token = regex.exec(url);
  // eslint-disable-next-line
  console.log(token);
  return (
    <div className={cx("authorization")}>
      <h1 className={cx("authorization__title")}>{title}</h1>
      <a
        href={`${oauthUrl}?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}`}
      >
        <div className={cx("authorization__vk", "authorization-vk")}>
          <div className={cx("authorization-vk__text")}>Войти с помощью</div>
          <div className={cx("authorization-vk__img")}>
            <VK />
          </div>
        </div>
      </a>
      <div className={cx("authorization__fields")}>{children}</div>
      <div className={cx("authorization__link", "form-link")}>
        <div className={cx("form-link__title")}>{text}</div>
        <Link to={link === "Зарегистрироваться" ? "/registration" : "/login"}>
          <div className={cx("form-link__text")}>{link}</div>
        </Link>
      </div>
    </div>
  );
};

export default Authorization;
