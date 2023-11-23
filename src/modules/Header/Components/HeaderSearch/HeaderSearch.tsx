import { FC, useContext } from "react";
import classNames from "classnames/bind";

import { ThemeContext } from "@/context";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { getSearchValue } from "@/store/action-creators/searchValue";

import { ReactComponent as SearchButton } from "@/assets/search-button.svg";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const HeaderSearch: FC = () => {
  const dispatch = useAppDispatch();
  const { theme } = useContext(ThemeContext);
  const searchValue = useAppSelector((state) => state.searchValue.searchValue);

  return (
    <div className={cx("header__search", "header-search")}>
      <input
        value={searchValue}
        onChange={(e) => dispatch(getSearchValue(e.target.value))}
        className={cx("header-search__input", `header-search__input-${theme}`)}
        placeholder="Поиск..."
      />
      <div className={cx("header-search__button")}>
        <SearchButton />
      </div>
    </div>
  );
};

export default HeaderSearch;
