import { FC, ReactNode } from "react";
import classNames from "classnames/bind";

import { ReactComponent as Logo } from "@/assets/logo-desktop.svg";

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
          <div className={cx("authorization-layout-top__logo")}>
            <Logo />
          </div>
          <div className={cx("authorization-layout-top__bg")} />
        </div>
        {children}
      </div>
    </main>
  );
};

export default AuthorizationLayout;
