import { FC, useEffect } from "react";
import classNames from "classnames/bind";
import { useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { getCard } from "@/api/getCard";

import { CardInfo } from "@/modules/CardInfo";
import { Header } from "@/modules/Header";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const Card: FC = () => {
  const dispatch = useAppDispatch();
  const card = useAppSelector((state) => state.card.card);
  const { id } = useParams();

  useEffect(() => {
    getCard(id?.slice(3, id?.length), dispatch);
  }, [dispatch, id]);

  return (
    <div className={cx("card")}>
      <Header />
      <div className={cx("container")}>
        <div className={cx("card__content")}>
          <CardInfo
            img={`http://s3.darklorian.ru/frames/${card.attachments[0].url}`}
            name="Попа - мы её увидели"
            title={card.name}
            description={card.description}
            likes={card.likes}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
