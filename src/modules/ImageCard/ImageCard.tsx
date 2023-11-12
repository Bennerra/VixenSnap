import { FC } from "react";
import classNames from "classnames/bind";

import { ReactComponent as Likes } from "@/assets/likes-filled.svg";
import { ReactComponent as Arrow } from "@/assets/arrow.svg";
import { ReactComponent as Favourites } from "@/assets/favourites.svg";
import Image from "@/assets/Rectangle 47.png";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

interface ImageCardProps {
  title: string;
  likes: string;
}

const ImageCard: FC<ImageCardProps> = ({ title, likes }) => {
  return (
    <div className={cx("card")}>
      <div className={cx("card__container")}>
        <div className={cx("card__image")}>
          <img src={Image} alt="" />
        </div>
        <div className={cx("card__bottom", "card-bottom")}>
          <div className={cx("card-bottom__description")}>
            {title}
            <div className={cx("card-bottom__likes")}>
              <Likes />
              {likes}
            </div>
          </div>
          <div className={cx("card-bottom__save", "card-save")}>
            <div className={cx("card-save__dropdown")}>
              Сохранить
              <Arrow />
            </div>
            <Favourites />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
