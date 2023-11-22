import { FC, useContext } from "react";
import ContentLoader from "react-content-loader";

import { ThemeContext } from "@/context";

const CardSkeleton: FC = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ContentLoader
      speed={2}
      width="100%"
      height="215"
      backgroundColor={theme === "light" ? "#f3f3f3" : "#5a5a5a"}
      foregroundColor={theme === "light" ? "#ecebeb" : "#535353"}
    >
      <rect x="0" y="15" rx="10" ry="10" width="100%" height="180" />
    </ContentLoader>
  );
};

export default CardSkeleton;
