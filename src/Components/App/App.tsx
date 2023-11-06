import React, { FC } from "react";
import classNames from "classnames/bind";

import { Header } from "@/modules/Header";
import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const App: FC = () => (
  <div className="App">
    <Header />
    <div className={cx("container")} />
  </div>
);

export default App;
