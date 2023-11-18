import { FC, useEffect } from "react";
import classNames from "classnames/bind";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { SetError, SetIsLoading } from "@/store/action-creators/getCards";
import { getCards } from "@/api/getCards";
import { IGetCards } from "@/models/IGetCards";

import { Header } from "@/modules/Header";
import CardsLayout from "@/layouts/CardsLayout/CardsLayout";
import { ImageCard } from "@/modules/ImageCard";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const { isLoading, cards } = useAppSelector((state) => state.cards);

  useEffect(() => {
    try {
      dispatch(SetIsLoading(true));
      getCards(dispatch);
      dispatch(SetIsLoading(false));
    } catch (e: any) {
      dispatch(SetError(e.message));
    }
  }, [dispatch]);

  return (
    <main className={cx("home")}>
      <Header />
      <div className={cx("container")}>
        {isLoading ? (
          <span className={cx("loading")}>Loading...</span>
        ) : (
          <CardsLayout>
            {cards.map((card: IGetCards) => (
              <ImageCard
                key={card.id}
                img={`http://s3.darklorian.ru/frames/${card.preview}`}
                title={card.name}
              />
            ))}
          </CardsLayout>
        )}
      </div>
    </main>
  );
};

export default Home;
