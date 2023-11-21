import { FC, useEffect } from "react";
import classNames from "classnames/bind";
import { useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { getCard } from "@/api/getCard";
import { SetIsLoading } from "@/store/action-creators/getCard";

import { CardInfo } from "@/modules/CardInfo";
import { Header } from "@/modules/Header";
import { CardSkeleton } from "@/modules/CardSkeleton";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const Card: FC = () => {
  const dispatch = useAppDispatch();
  const { card, isLoading } = useAppSelector((state) => state.card);
  const { id } = useParams();

  useEffect(() => {
    dispatch(SetIsLoading(true));
    getCard(id, dispatch);
    dispatch(SetIsLoading(false));
  }, [dispatch, id]);

  return (
    <div className={cx("card")}>
      <Header />
      <div className={cx("container")}>
        <div className={cx("card__content")}>
          {isLoading ? (
            <CardSkeleton />
          ) : (
            <CardInfo
              img={`http://s3.darklorian.ru/frames/${card.attachments[0].url}`}
              name="Попа - мы её увидели"
              title={card.name}
              description={card.description}
              likes={card.likes}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
