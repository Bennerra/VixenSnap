import { FC } from "react";
import { CardSkeleton } from "@/modules/CardsSkeleton";
import { v4 as uuid4 } from "uuid";

import { CardsLayout } from "@/layouts/CardsLayout";

const Loader: FC = () => {
  const cardsCount = [...Array(20)];

  return (
    <CardsLayout>
      {cardsCount.map(() => (
        <CardSkeleton key={uuid4()} />
      ))}
    </CardsLayout>
  );
};

export default Loader;
