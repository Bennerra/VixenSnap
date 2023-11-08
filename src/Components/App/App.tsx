import { FC, useContext } from "react";
import classNames from "classnames/bind";

import { ThemeContext } from "@/context";

import { Header } from "@/modules/Header";
import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const App: FC = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={cx("App", `App-${theme}`)}>
      <Header />
      <div className={cx("container")} />
    </div>
  );
};

export default App;
