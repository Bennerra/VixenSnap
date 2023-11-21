import { FC, useEffect } from "react";
import classNames from "classnames/bind";

import { SetIsLoading } from "@/store/action-creators/getCards";
import { getCards } from "@/api/getCards";
import { getUserToken } from "@/utils/getUserToken";
import { getUser } from "@/api/user";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";

import { Header } from "@/modules/Header";
import { CardsInfiniteScroll } from "@/modules/CardsInfiniteScroll";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector((state) => state.cards.page);

  useEffect(() => {
    dispatch(SetIsLoading(true));
    getCards(page, dispatch);
    dispatch(SetIsLoading(false));
    getUserToken(dispatch);
    getUser(dispatch);
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
