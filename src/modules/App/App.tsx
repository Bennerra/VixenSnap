import { FC, useContext, useEffect } from "react";
import classNames from "classnames/bind";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";

import { ThemeContext } from "@/context";
import { useAppDispatch } from "@/hooks/redux";

import { Home } from "@/pages/Home";
import { Registration } from "@/pages/Registration";
import { Login } from "@/pages/Login";
import { CreationCard } from "@/pages/CreationCard";
import { Profile } from "@/pages/Profile";

import { getUserToken } from "@/utils/getUserToken";
import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const App: FC = () => {
  const { theme } = useContext(ThemeContext);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getUserToken(dispatch);
  }, [dispatch]);

  return (
    <div className={cx("App", `App-${theme}`)}>
      <SkeletonTheme baseColor="#5a5a5a" highlightColor="$grey-umber">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/creation" element={<CreationCard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </SkeletonTheme>
    </div>
  );
};

export default App;
