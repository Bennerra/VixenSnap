import React, { FC, useContext } from "react";
import classNames from "classnames/bind";
import { SubmitHandler, useForm } from "react-hook-form";

import { ThemeContext } from "@/context";
import { ICreationCard } from "@/modules/CreationCardForm/models/ICreationCard";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { uploadFile } from "@/store/action-creators/uploadFiles";

import { ReactComponent as Upload } from "@/assets/upload.svg";
import { Input } from "@/ui/Input";
import { Button } from "@/ui/Button";
import { ImagesPreview } from "@/modules/CreationCardForm/components/ImagesPreview";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const CreationCardForm: FC = () => {
  const { theme } = useContext(ThemeContext);
  const { handleSubmit, register } = useForm<ICreationCard>();
  const dispatch = useAppDispatch();
  const files = useAppSelector((state) => state.files.uploadedFiles);

  const onSubmit: SubmitHandler<ICreationCard> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileArr = Array.from(e.target.files);
      dispatch(uploadFile(fileArr));
    }
  };

  return (
    <div className={cx("creation-card")}>
      <div className={cx("creation-card__left")}>
        <div className={cx("creation-card__upload", "upload")}>
          <div className={cx("upload__icon")}>
            <Upload />
          </div>
          <div className={cx("upload__text")}>Загрузите файлы</div>
          <input
            {...register("files")}
            className={cx("upload__input")}
            type="file"
            multiple
            onChange={onImageChange}
          />
        </div>
        <ImagesPreview files={files} />
      </div>
      <div className={cx("creation-card__description", "description")}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={cx("description__form", "description-form")}
        >
          <div className={cx("description-form__item", "description-item")}>
            <h2
              className={cx(
                "description-item__title",
                `description-item__title-${theme}`
              )}
            >
              Название
            </h2>
            <Input
              {...register("title")}
              placeholder="Добавьте название"
              theme={theme}
            />
          </div>
          <div className={cx("description__item", "description-item")}>
            <h2
              className={cx(
                "description-item__title",
                `description-item__title-${theme}`
              )}
            >
              Описание
            </h2>
            <textarea
              {...register("description")}
              placeholder="Добавьте описание"
              className={cx(
                "description-item__textarea",
                `description-item__textarea-${theme}`
              )}
              cols={92}
              rows={10}
            />
          </div>
          <div className={cx("description__button")}>
            <Button type="submit" text="Создать" color="orange" size="medium" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreationCardForm;
