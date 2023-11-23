import { FC } from "react";
import classNames from "classnames/bind";

import { RegistrationForm } from "@/modules/RegistrationForm";
import { Authorization } from "@/modules/Authorization";
import { AuthorizationLayout } from "@/layouts/AuthorizationLayout";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const Registration: FC = () => {
  return (
    <AuthorizationLayout>
      <div className={cx("registration__form")}>
        <Authorization
          title="Регистрация"
          text="Уже зарегистрированы?"
          link="Войти"
        >
          <RegistrationForm />
        </Authorization>
      </div>
    </AuthorizationLayout>
  );
};

export default Registration;
