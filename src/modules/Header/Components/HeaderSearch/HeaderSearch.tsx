import React, { FC } from "react";
import classNames from "classnames/bind";

import styles from "./styles.module.scss";

import { Input } from "../../../../ui/Input";
import { ReactComponent as SearchButton } from "../../../../assets/search-button.svg";

const cx = classNames.bind(styles);

const HeaderSearch: FC = () => {
  return (
    <div className={cx("header__search", "header-search")}>
      <Input placeholder="Поиск..." />
      <div className={cx("header-search__button")}>
        <SearchButton />
      </div>
    </div>
  );
};

export default HeaderSearch;
