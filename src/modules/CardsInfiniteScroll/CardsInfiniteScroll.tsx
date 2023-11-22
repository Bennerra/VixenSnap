import { FC, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { v4 as uuid4 } from "uuid";

import { IGetCards } from "@/models/IGetCards";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {
  filterCards,
  resetCards,
  setCards,
} from "@/store/action-creators/getCards";

import { ImageCard } from "@/modules/ImageCard";
import { Loader } from "@/ui/Loader";
import { CardsLayout } from "@/layouts/CardsLayout";

const CardsInfiniteScroll: FC = () => {
  const dispatch = useAppDispatch();
  const { cards, page, totalCount } = useAppSelector((state) => state.cards);
  const searchValue = useAppSelector((state) => state.searchValue.searchValue);

  useEffect(() => {
    if (searchValue !== "") {
      dispatch(filterCards(searchValue) as any);
    } else {
      dispatch(resetCards());
      dispatch(setCards(page) as any);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, searchValue]);

  const fetchMoreCards = () => {
    dispatch(setCards(page) as any);
  };

  return (
    <InfiniteScroll
      next={fetchMoreCards}
      hasMore={totalCount >= 25}
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
