import React, { FC } from "react";
import classNames from "classnames/bind";

import styles from "./styles.module.scss";

import { Header } from "../../modules/Header";

const cx = classNames.bind(styles);

const App: FC = () => (
  <div className="App">
    <Header />
    <div className={cx("container")} />
  </div>
);

export default App;
