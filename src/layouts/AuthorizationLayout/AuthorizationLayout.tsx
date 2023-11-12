import { FC, ReactNode } from "react";
import classNames from "classnames/bind";

import { ReactComponent as Logo } from "@/assets/logo-desktop.svg";

import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

interface AuthorizationLayoutProps {
  children: ReactNode;
}

const AuthorizationLayout: FC<AuthorizationLayoutProps> = ({ children }) => {
  return (
    <main className={cx("authorization-layout")}>
      <div className={cx("authorization-layout__container")}>
        <div
          className={cx(
            "authorization-layout__top",
            "authorization-layout-top"
          )}
        >
          <Link to="/">
            <div className={cx("authorization-layout-top__logo")}>
              <Logo />
            </div>
          </Link>
          <div className={cx("authorization-layout-top__bg")} />
        </div>
        {children}
      </div>
    </main>
  );
};

export default AuthorizationLayout;
