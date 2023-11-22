import { FC } from "react";
import { CardSkeleton } from "@/modules/CardsSkeleton";
import { v4 as uuid4 } from "uuid";

import CardsLayout from "@/layouts/CardsLayout/CardsLayout";
import classNames from "classnames/bind";

import styles from "./style.module.scss";

const cx = classNames.bind(styles);

const Loader: FC = () => {
  const cardsCount = [...Array(20)];

  return (
    <div className={cx("loader")}>
      <CardsLayout>
        {cardsCount.map(() => (
          <CardSkeleton key={uuid4()} />
        ))}
      </CardsLayout>
    </div>
  );
};

export default Loader;
