import { FC, useContext } from "react";
import classNames from "classnames/bind";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { ThemeContext } from "@/context";

import { Input } from "@/ui/Input";
import { Button } from "@/ui/Button";

import { ILoginForm } from "@/modules/LoginForm/models/ILoginForm";
import { loginUser } from "@/modules/LoginForm/login";

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

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: yupResolver(schema) as any,
  });

  const onSubmit: SubmitHandler<ILoginForm> = async (data) => {
    await loginUser(data);
    // eslint-disable-next-line
    console.log(data);
  };

  return (
    <form className={cx("login-form")} onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("login")}
        theme={theme}
        placeholder="Логин или e-mail"
        error={errors?.login?.message}
      />
      <Input
        {...register("password")}
        theme={theme}
        placeholder="Пароль"
        type="password"
        error={errors?.password?.message}
      />
      <Button type="submit" text="Войти" color="orange" size="big" />
    </form>
  );
};

export default LoginForm;
