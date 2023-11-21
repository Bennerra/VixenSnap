import { FC, useEffect } from "react";
import classNames from "classnames/bind";

import { setCards, setIsLoading } from "@/store/action-creators/getCards";
import { getUserToken } from "@/utils/getUserToken";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setUserMeInfo } from "@/store/action-creators/user";

import { Header } from "@/modules/Header";
import { CardsInfiniteScroll } from "@/modules/CardsInfiniteScroll";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector((state) => state.cards.page);

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
        <div className={cx("home__cards-list")}>
          <CardsInfiniteScroll />
        </div>
      </div>
    </main>
  );
};

export default Home;
