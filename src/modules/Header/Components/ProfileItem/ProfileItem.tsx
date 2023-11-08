import React, { FC, ReactComponentElement } from "react";

interface ProfileItemProps {
  img?: ReactComponentElement<any>;
  text: string;
  onClick?: () => void;
}
const ProfileItem: FC<ProfileItemProps> = ({ img, text, onClick }) => {
  return (
    <li onClick={onClick}>
      {img}
      {text}
    </li>
  );
};

export default ProfileItem;
