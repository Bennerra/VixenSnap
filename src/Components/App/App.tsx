import { FC, useContext } from "react";
import classNames from "classnames/bind";

import { ThemeContext } from "@/context";

import { Authorization } from "@/modules/Authorization";
import { LoginForm } from "@/modules/LoginForm";

import { RegistrationForm } from "@/modules/RegistrationForm";
import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const App: FC = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={cx("App", `App-${theme}`)}>
      <div className={cx("authorization")}>
        <Authorization
          title="Регистрация"
          text="Уже зарегистрированы?"
          link="Войти"
        >
          <LoginForm />
        </Authorization>
        <Authorization
          title="Регистрация"
          text="Уже зарегистрированы?"
          link="Войти"
        >
          <RegistrationForm />
        </Authorization>
      </div>
    </div>
  );
};

export default App;
