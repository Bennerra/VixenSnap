import { FC, useEffect } from "react";
import classNames from "classnames/bind";
import { useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { getCard, setIsLoading } from "@/store/action-creators/getCard";

import { CardInfo } from "@/modules/CardInfo";
import { Header } from "@/modules/Header";
import { CardSkeleton } from "@/modules/CardSkeleton";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const Card: FC = () => {
  const dispatch = useAppDispatch();
  const { card, isLoading } = useAppSelector((state) => state.card);
  const userCard = useAppSelector((state) => state.user.userCardInfo);
  const { id } = useParams();

  useEffect(() => {
    dispatch(setIsLoading(true));
    dispatch(getCard(id) as any);
    dispatch(setIsLoading(false));
  }, [dispatch, id]);

  return (
    <div className={cx("card")}>
      <Header />
      <div className={cx("container")}>
        <div className={cx("card__content")}>
          {isLoading || !card.id ? (
            <CardSkeleton />
          ) : (
            <CardInfo
              img={`http://s3.darklorian.ru/frames/${card.attachments[0].url}`}
              name={userCard.name}
              title={card.name}
              description={card.description}
              likes={card.likes}
              is_liked={card.is_liked}
              id={card.id}
              owner_id={card.owner_id}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
