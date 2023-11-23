import { FC, ReactNode } from "react";
import classNames from "classnames/bind";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

interface GridLayoutProps {
  children: ReactNode | ReactNode[];
}

const CardsLayout: FC<GridLayoutProps> = ({ children }) => {
  return <div className={cx("cards-list")}>{children}</div>;
};

export default CardsLayout;
