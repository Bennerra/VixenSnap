import { FC } from "react";
import classNames from "classnames/bind";

import { ReactComponent as Like } from "@/assets/likes-filled.svg";
import { ReactComponent as EmptyLike } from "@/assets/empty-like.svg";
import { ReactComponent as Favourites } from "@/assets/favourites.svg";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

interface ImageCardProps {
  img: string;
  title: string;
  likes: number;
  is_liked: boolean;
  onClick: () => void;
}

const ImageCard: FC<ImageCardProps> = ({
  img,
  title,
  likes,
  is_liked,
  onClick,
}) => {
  return (
    <div onClick={onClick} className={cx("card")}>
      <img alt="" src={img} className={cx("card__image")} />
      <div className={cx("card__bottom", "card-bottom")}>
        <div className={cx("card-bottom__description")}>
          <span className={cx("card-bottom__title")}>{title}</span>
          <div className={cx("card-bottom__likes", "bottom-likes")}>
            <div className={cx("bottom-likes__image")}>
              {is_liked ? <Like /> : <EmptyLike />}
            </div>
            {likes}
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
  );
};

export default ImageCard;
