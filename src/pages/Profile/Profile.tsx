import { FC } from "react";
import classNames from "classnames/bind";
import { Navigate } from "react-router-dom";

import { useAppSelector } from "@/hooks/redux";

import { Header } from "@/modules/Header";
import { ProfileInfo } from "@/modules/ProfileInfo";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const Profile: FC = () => {
  const isAuth = useAppSelector((state) => state.isAuth.isAuth);

  return (
    <main className={cx("profile")}>
      {!isAuth && <Navigate to="/" replace />}
      <Header />
      <div className={cx("container")}>
        <ProfileInfo />
      </div>
    </main>
  );
};

export default Profile;
