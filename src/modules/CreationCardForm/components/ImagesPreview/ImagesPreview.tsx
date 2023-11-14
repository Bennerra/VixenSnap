import { FC } from "react";
import classNames from "classnames/bind";

import { ReactComponent as Delete } from "@/assets/cross.svg";

import { deleteFile } from "@/store/action-creators/uploadFiles";
import { useAppDispatch } from "@/hooks/redux";

import styles from "./styles.module.scss";

interface ImagesPreviewProps {
  files: File[];
}

const cx = classNames.bind(styles);

const ImagesPreview: FC<ImagesPreviewProps> = ({ files }) => {
  const dispatch = useAppDispatch();

  const removeImage = (file: string) => {
    dispatch(deleteFile(file));
  };

  return (
    <div className={cx("creation-card__images", "images")}>
      {files.map((file) => {
        const src = URL.createObjectURL(file);
        return (
          <div key={file.name} className={cx("images__item", "images-item")}>
            <img className={cx("images-item__picture")} src={src} alt="" />
            <div
              onClick={() => removeImage(file.name)}
              className={cx("images-item__close")}
            >
              <Delete />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ImagesPreview;
