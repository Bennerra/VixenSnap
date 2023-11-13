import { FC } from "react";
import { Link } from "react-router-dom";

import { Button } from "@/ui/Button";

interface ButtonsListProps {
  size: "small" | "medium";
}

const ButtonsList: FC<ButtonsListProps> = ({ size }) => {
  return (
    <>
      <Link to="/">
        <Button text="Главная" color="gray" size={size} />
      </Link>
      <Link to="/creation">
        <Button text="Создать" color="orange" size={size} />
      </Link>
    </>
  );
};

export default ButtonsList;
