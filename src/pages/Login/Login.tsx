import { FC } from "react";
import classNames from "classnames/bind";

import { AuthorizationLayout } from "@/layouts/AuthorizationLayout";
import { Authorization } from "@/modules/Authorization";
import { LoginForm } from "@/modules/LoginForm";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const Login: FC = () => {
  return (
    <AuthorizationLayout>
      <div className={cx("login__form")}>
        <Authorization
          title="Войти в аккаунт"
          text="Ещё нет аккаунта?"
          link="Зарегистрироваться"
        >
          <LoginForm />
        </Authorization>
      </div>
    </AuthorizationLayout>
  );
};

export default Login;
