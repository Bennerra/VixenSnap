import { FC, useContext } from "react";
import classNames from "classnames/bind";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { ThemeContext } from "@/context";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { getUserToken } from "@/utils/getUserToken";
import { Input } from "@/ui/Input";
import { ILoginForm } from "@/models/ILoginForm";
import { loginUser } from "@/api/login";

import { AuthButtonsList } from "@/modules/AuthButtonsList";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const schema = yup
  .object()
  .shape({
    login: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

const LoginForm: FC = () => {
  const { theme } = useContext(ThemeContext);
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: yupResolver(schema) as any,
  });
  const { loginError } = useAppSelector((state) => state.error);

  const onSubmit: SubmitHandler<ILoginForm> = async (data) => {
    await loginUser(data, dispatch);
    getUserToken(dispatch);
  };

  return (
    <form className={cx("login-form")} onSubmit={handleSubmit(onSubmit)}>
      <div className={cx("login-form__input")}>
        <Input
          {...register("login")}
          theme={theme}
          cancelled={!!loginError}
          placeholder="Логин или e-mail"
          error={errors?.login?.message}
        />
        {errors?.login?.message && (
          <div className={cx("login-form__error")}>
            {errors?.login?.message}
          </div>
        )}
      </div>
      <div className={cx("login-form__input")}>
        <Input
          {...register("password")}
          theme={theme}
          cancelled={!!loginError}
          placeholder="Пароль"
          type="password"
          error={errors?.password?.message}
        />
        {errors?.login?.message && (
          <div className={cx("login-form__error")}>
            {errors?.password?.message}
          </div>
        )}
      </div>
      {loginError && (
        <div className={cx("login-form__error")}>{loginError}</div>
      )}
      <AuthButtonsList text="Войти" />
    </form>
  );
};

export default LoginForm;
