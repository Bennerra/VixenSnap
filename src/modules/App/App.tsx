import { FC, useContext } from "react";
import classNames from "classnames/bind";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";

import { ThemeContext } from "@/context";
import { Home } from "@/pages/Home";
import { Registration } from "@/pages/Registration";
import { Login } from "@/pages/Login";
import { CreationCard } from "@/pages/CreationCard";
import { Profile } from "@/pages/Profile";
import { Card } from "@/pages/Card";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const App: FC = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={cx("App", `App-${theme}`)}>
      <SkeletonTheme baseColor="#5a5a5a" highlightColor="$grey-umber">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/creation" element={<CreationCard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/card/:id" element={<Card />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </SkeletonTheme>
    </div>
  );
};

export default App;
