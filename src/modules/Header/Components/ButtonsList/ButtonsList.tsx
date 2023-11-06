import React, { FC } from "react";

import { Button } from "../../../../ui/Button";

interface ButtonsListProps {
  size: "small" | "medium";
}

const ButtonsList: FC<ButtonsListProps> = ({ size }) => {
  return (
    <>
      <Button text="Главная" color="gray" size={size} />
      <Button text="Создать" color="orange" size={size} />
    </>
  );
};

export default ButtonsList;
