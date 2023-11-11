import React, { FC, useContext } from "react";
import classNames from "classnames/bind";

import { ThemeContext } from "@/context";

import { Input } from "@/ui/Input";
import { ReactComponent as SearchButton } from "@/assets/search-button.svg";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const HeaderSearch: FC = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={cx("header__search", "header-search")}>
      <Input theme={theme} placeholder="Поиск..." />
      <div className={cx("header-search__button")}>
        <SearchButton />
      </div>
    </div>
  );
};

export default HeaderSearch;
