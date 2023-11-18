import { FC } from "react";
import classNames from "classnames/bind";

import { ReactComponent as Likes } from "@/assets/likes-filled.svg";
import { ReactComponent as Favourites } from "@/assets/favourites.svg";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

interface ImageCardProps {
  img: string;
  title: string;
  likes?: string;
}

const ImageCard: FC<ImageCardProps> = ({ img, title, likes }) => {
  return (
    <div className={cx("card")}>
      <img alt="" src={img} className={cx("card__image")} />
      <div className={cx("card__bottom", "card-bottom")}>
        <div className={cx("card-bottom__description")}>
          <span className={cx("card-bottom__title")}>{title}</span>
          <div className={cx("card-bottom__likes", "bottom-likes")}>
            <div className={cx("bottom-likes__image")}>
              <Likes />
            </div>
            {likes}
          </div>
        </div>
        <div className={cx("card-bottom__save", "card-save")}>
          <div className={cx("card-save__dropdown", "save-dropdown")}>
            Сохранить
            <div className={cx("save-dropdown__favourites")}>
              <Favourites />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
