import { FC, useContext } from "react";
import classNames from "classnames/bind";
import ContentLoader from "react-content-loader";

import { ThemeContext } from "@/context";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const CardSkeleton: FC = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={cx("card-skeleton")}>
      <ContentLoader
        speed={2}
        width="100%"
        height="100%"
        backgroundColor={theme === "light" ? "#f3f3f3" : "#5a5a5a"}
        foregroundColor={theme === "light" ? "#ecebeb" : "#535353"}
      >
        <rect x="0" y="0" rx="7" ry="7" width="100%" height="100%" />
      </ContentLoader>
    </div>
  );
};

export default CardSkeleton;
