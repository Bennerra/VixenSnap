import { FC } from "react";
import classNames from "classnames/bind";
import ContentLoader from "react-content-loader";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const CardSkeleton: FC = () => {
  return (
    <div className={cx("card-skeleton")}>
      <ContentLoader
        speed={2}
        width="100%"
        height="100%"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="7" ry="7" width="100%" height="100%" />
      </ContentLoader>
    </div>
  );
};

export default CardSkeleton;
