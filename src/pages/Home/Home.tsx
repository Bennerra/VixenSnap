import { FC, useEffect } from "react";
import classNames from "classnames/bind";
import { v4 as uuid4 } from "uuid";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { getCards } from "@/api/getCards";
import { IGetCards } from "@/models/IGetCards";
import { SetIsLoading } from "@/store/action-creators/getCards";

import { CardSkeleton } from "@/modules/CardsSkeleton";
import { Header } from "@/modules/Header";
import CardsLayout from "@/layouts/CardsLayout/CardsLayout";
import { ImageCard } from "@/modules/ImageCard";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const { isLoading, cards } = useAppSelector((state) => state.cards);
  const cardsCount = [...Array(10)];

  useEffect(() => {
    dispatch(SetIsLoading(true));
    getCards(dispatch);
    dispatch(SetIsLoading(false));
  }, [dispatch]);

  return (
    <main className={cx("home")}>
      <Header />
      <div className={cx("container")}>
        <CardsLayout>
          {isLoading && cardsCount.map(() => <CardSkeleton key={uuid4()} />)}
          {cards.map((card: IGetCards) => (
            <ImageCard
              key={card.id}
              img={`http://s3.darklorian.ru/frames/${card.preview}`}
              title={card.name}
              likes={card.likes}
            />
          ))}
        </CardsLayout>
      </div>
    </main>
  );
};

export default Home;
