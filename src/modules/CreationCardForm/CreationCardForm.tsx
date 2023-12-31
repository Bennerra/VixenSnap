import React, { FC, useContext } from "react";
import classNames from "classnames/bind";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { ThemeContext } from "@/context";
import { ICreationCard } from "@/models/ICreationCard";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { clearFileForm, uploadFile } from "@/store/action-creators/uploadFiles";
import { creationCard } from "@/api/creationCard";

import { ReactComponent as Upload } from "@/assets/upload.svg";
import { Input } from "@/ui/Input";
import { Button } from "@/ui/Button";
import { ImagesPreview } from "@/modules/CreationCardForm/components/ImagesPreview";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const schema = yup.object().shape({
  name: yup.string().required(),
});

const CreationCardForm: FC = () => {
  const { theme } = useContext(ThemeContext);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ICreationCard>({
    resolver: yupResolver(schema) as any,
  });
  const dispatch = useAppDispatch();
  const files = useAppSelector((state) => state.files.uploadedFiles);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ICreationCard> = async (data) => {
    const sendData = new FormData();
    sendData.append("name", data.name);
    sendData.append("description", data.description);
    files.forEach((el: File) => {
      sendData.append("files", el);
    });
    await creationCard(sendData);
    dispatch(clearFileForm());
    navigate("/");
  };

  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileArr: File[] = Array.from(e.target.files);
      const filterArr = fileArr.filter((file) => {
        return !files.find((item) => item.name === file.name);
      });
      if (filterArr.length + files.length <= 15) {
        dispatch(uploadFile(filterArr));
      }
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
            accept=".png, .jpg, .gif, .jpeg, .bmp, .webp, .svg"
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
              {...register("name")}
              placeholder="Добавьте название"
              theme={theme}
              error={errors?.name?.message}
            />
            {errors?.name?.message && (
              <div className={cx("description-form__error")}>
                {errors?.name?.message}
              </div>
            )}
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
            <Button
              type="submit"
              text="Создать"
              color="orange"
              size="medium"
              theme={theme}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreationCardForm;
