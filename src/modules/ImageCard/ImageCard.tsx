import { FC, useEffect, useState } from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import { setLike } from "@/api/like";

import { ReactComponent as Like } from "@/assets/likes-filled.svg";
import { ReactComponent as EmptyLike } from "@/assets/empty-like.svg";
import { ReactComponent as Favourites } from "@/assets/favourites.svg";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

interface ImageCardProps {
  img: string;
  title: string;
  likes: number;
  id: string;
  is_liked: boolean;
}

const ImageCard: FC<ImageCardProps> = ({ img, title, likes, id, is_liked }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [countLike, setCountLike] = useState(0);

  useEffect(() => {
    setIsLiked(is_liked);
    setCountLike(likes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleIsLiked = () => {
    setIsLiked(!isLiked);
    if (isLiked) {
      setCountLike(countLike - 1);
    } else {
      setCountLike(countLike + 1);
    }
    setLike(id);
  };

  return (
    <Link to={`/card/${id}`}>
      <div className={cx("card")}>
        <img alt="" src={img} className={cx("card__image")} />
        <div className={cx("card__bottom", "card-bottom")}>
          <div className={cx("card-bottom__description")}>
            <span className={cx("card-bottom__title")}>{title}</span>
            <div
              onClick={(e) => e.preventDefault()}
              className={cx("card-bottom__likes", "bottom-likes")}
            >
              <div
                onClick={handleIsLiked}
                className={cx("bottom-likes__image")}
              >
                {isLiked ? <Like /> : <EmptyLike />}
              </div>
              {countLike}
            </div>
          </div>
          <div className={cx("card-bottom__save", "card-save")}>
            Сохранить
            <div className={cx("card-save__favourites")}>
              <Favourites />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ImageCard;
