import { FC, useEffect } from "react";
import classNames from "classnames/bind";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { getCards } from "@/api/getCards";
import { IGetCards } from "@/models/IGetCards";

import { Header } from "@/modules/Header";
import CardsLayout from "@/layouts/CardsLayout/CardsLayout";
import { ImageCard } from "@/modules/ImageCard";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const cards = useAppSelector((state) => state.cards.cards);

  useEffect(() => {
    getCards(dispatch);
  }, [dispatch, cards]);

  return (
    <main className={cx("home")}>
      <Header />
      <div className={cx("container")}>
        <CardsLayout>
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
