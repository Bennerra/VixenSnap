import { FC, useContext, useEffect, useState } from "react";
import classNames from "classnames/bind";

import { ThemeContext } from "@/context";
import { useAppDispatch } from "@/hooks/redux";
import { setUserCardInfo } from "@/store/action-creators/user";
import { setLike } from "@/api/like";

import { Button } from "@/ui/Button";
import { ReactComponent as Like } from "@/assets/likes-filled.svg";
import { ReactComponent as EmptyLike } from "@/assets/empty-like.svg";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

interface CardInfoProps {
  img: string;
  name: string;
  title: string;
  description: string;
  likes: number;
  is_liked: boolean;
  id: string;
  owner_id: string;
}

const CardInfo: FC<CardInfoProps> = ({
  img,
  description,
  name,
  title,
  likes,
  is_liked,
  id,
  owner_id,
}) => {
  const dispatch = useAppDispatch();
  const { theme } = useContext(ThemeContext);
  const [isLike, setIsLike] = useState(false);
  const [countLike, setCountLike] = useState(0);

  useEffect(() => {
    dispatch(setUserCardInfo(owner_id) as any);
    setIsLike(is_liked);
    setCountLike(likes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleIsLiked = () => {
    setIsLike(!isLike);
    if (isLike) {
      setCountLike(countLike - 1);
    } else {
      setCountLike(countLike + 1);
    }
    setLike(id);
  };

  return (
    <div className={cx("card-info", `card-info-${theme}`)}>
      <div
        className={cx("card-info__container", `card-info__container-${theme}`)}
      >
        <div className={cx("card-info__photo")}>
          <img src={img} alt="" />
        </div>
        <div
          className={cx(
            "card-info__content",
            "card-content",
            `card-info__content-${theme}`
          )}
        >
          <div
            className={cx(
              "card-content__about",
              "card-about",
              `card-about-${theme}`
            )}
          >
            <div className={cx("card-about__name")}>{name}</div>
            <h2 className={cx("card-about__title")}>{title}</h2>
            <p className={cx("card-about__description")}>{description}</p>
          </div>
          <div className={cx("card-content__save", "card-save")}>
            <div className={cx("card-save__button")}>
              <Button
                theme={theme}
                text="Сохранить"
                color="orange"
                size="medium"
              />
            </div>
            <div className={cx("card-save__likes", "card-likes")}>
              <div
                onClick={() => handleIsLiked()}
                className={cx("card-likes__img")}
              >
                {isLike ? <Like /> : <EmptyLike />}
              </div>
              {countLike}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
