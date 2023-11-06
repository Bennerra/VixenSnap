import React, { FC } from "react";
import classNames from "classnames/bind";

import styles from "./styles.module.scss";

import { ReactComponent as LogoDesktop } from "../../../../assets/logo-desktop.svg";
import { ReactComponent as Logo } from "../../../../assets/logo.svg";

const cx = classNames.bind(styles);

const HeaderLogo: FC = () => {
  return (
    <div className={cx("header__logo", "header-logo")}>
      <div className={cx("header-logo__desktop")}>
        <LogoDesktop />
      </div>
      <div className={cx("header-logo__mobile")}>
        <Logo />
      </div>
    </div>
  );
};

export default HeaderLogo;
