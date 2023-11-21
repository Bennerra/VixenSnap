import { FC } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { v4 as uuid4 } from "uuid";

import { IGetCards } from "@/models/IGetCards";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setCards, setIsLoading } from "@/store/action-creators/getCards";

import { ImageCard } from "@/modules/ImageCard";
import { Loader } from "@/modules/Loader";
import { CardsLayout } from "@/layouts/CardsLayout";

const CardsInfiniteScroll: FC = () => {
  const dispatch = useAppDispatch();
  const { cards, page, totalCount } = useAppSelector((state) => state.cards);

  const fetchMoreCards = () => {
    dispatch(setIsLoading(true));
    dispatch(setCards(page) as any);
    dispatch(setIsLoading(false));
  };

  return (
    <InfiniteScroll
      next={fetchMoreCards}
      hasMore={totalCount > 0}
      loader={<Loader />}
      dataLength={cards.length}
    >
      <CardsLayout>
        {cards.map((card: IGetCards) => (
          <ImageCard
            key={uuid4()}
            img={`http://s3.darklorian.ru/frames/${card.preview}`}
            title={card.name}
            likes={card.likes}
            id={card.id}
            is_liked={card.is_liked}
          />
        ))}
      </CardsLayout>
    </InfiniteScroll>
  );
};

export default CardsInfiniteScroll;
