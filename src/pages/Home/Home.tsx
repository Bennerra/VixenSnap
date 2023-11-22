import { FC, useEffect } from "react";
import classNames from "classnames/bind";

import { setCards, setIsLoading } from "@/store/action-creators/getCards";
import { getUserToken } from "@/utils/getUserToken";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setUserMeInfo } from "@/store/action-creators/user";

import { Loader } from "@/ui/Loader";
import { Header } from "@/modules/Header";
import { CardsInfiniteScroll } from "@/modules/CardsInfiniteScroll";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const { cards, page } = useAppSelector((state) => state.cards);
  const isLoading = useAppSelector((state) => state.cards.isLoading);

  useEffect(() => {
    dispatch(setIsLoading(true));
    dispatch(setCards(page) as any);
    dispatch(setIsLoading(false));
    getUserToken(dispatch);
    dispatch(setUserMeInfo() as any);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className={cx("home")}>
      <Header />
      <div className={cx("container")}>
        {cards.length === 0 && (
          <div className={cx("home__not-found")}>Карточки не найдены!</div>
        )}
        {isLoading ? (
          <Loader />
        ) : (
          <div className={cx("home__cards-list")}>
            <CardsInfiniteScroll />
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
