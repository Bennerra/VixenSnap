import { FC, useContext } from "react";
import classNames from "classnames/bind";

import { Button } from "@/ui/Button";
import { ThemeContext } from "@/context";

import { ReactComponent as EmptyLike } from "@/assets/empty-like.svg";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

interface CardInfoProps {
  img: string;
  name: string;
  title: string;
  description: string;
  likes: number;
}

const CardInfo: FC<CardInfoProps> = ({
  img,
  description,
  name,
  title,
  likes,
}) => {
  const { theme } = useContext(ThemeContext);

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
              <div className={cx("card-likes__img")}>
                <EmptyLike />
              </div>
              {likes}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
