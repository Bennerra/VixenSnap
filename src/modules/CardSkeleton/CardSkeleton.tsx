import { FC, useContext } from "react";
import ContentLoader from "react-content-loader";

import { ThemeContext } from "@/context";

const CardSkeleton: FC = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ContentLoader
      speed={2}
      width="100%"
      height="300"
      backgroundColor={theme === "light" ? "#f3f3f3" : "#5a5a5a"}
      foregroundColor={theme === "light" ? "#ecebeb" : "#535353"}
    >
      <rect x="0" y="0" rx="30" ry="30" width="100%" height="300" />
    </ContentLoader>
  );
};

export default CardSkeleton;
