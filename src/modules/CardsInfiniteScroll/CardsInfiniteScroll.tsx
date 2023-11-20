import { FC, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { CardSkeleton } from "@/modules/CardsSkeleton";
import { v4 as uuid4 } from "uuid";

import { IGetCards } from "@/models/IGetCards";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { getCards } from "@/api/getCards";
import { SetIsLoading } from "@/store/action-creators/getCards";

import { ImageCard } from "@/modules/ImageCard";
import CardsLayout from "@/layouts/CardsLayout/CardsLayout";

const CardsInfiniteScroll: FC = () => {
  const dispatch = useAppDispatch();
  const { cards, page, totalCount } = useAppSelector((state) => state.cards);
  const cardsCount = [...Array(10)];

  useEffect(() => {
    dispatch(SetIsLoading(true));
    getCards(page, dispatch);
    dispatch(SetIsLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMoreCards = () => {
    dispatch(SetIsLoading(true));
    getCards(page, dispatch);
    if (totalCount === 0) {
      dispatch(SetIsLoading(false));
    }
    dispatch(SetIsLoading(false));
  };

  return (
    <InfiniteScroll
      next={fetchMoreCards}
      hasMore={totalCount > 0}
      loader={
        <CardsLayout>
          {cardsCount.map(() => (
            <CardSkeleton key={uuid4()} />
          ))}
        </CardsLayout>
      }
      dataLength={cards.length}
    >
      <CardsLayout>
        {cards.map((card: IGetCards) => (
          <ImageCard
            key={uuid4()}
            img={`http://s3.darklorian.ru/frames/${card.preview}`}
            title={card.name}
            likes={card.likes}
          />
        ))}
      </CardsLayout>
    </InfiniteScroll>
  );
};

export default CardsInfiniteScroll;
