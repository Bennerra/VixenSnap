import React, { FC, useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import classNames from "classnames/bind";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Input } from "@/ui/Input";
import { registrationUser } from "@/api/registration";

import { IRegistrationForm } from "@/models/IRegistrationForm";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { ThemeContext } from "@/context";
import { loginUser } from "@/api/login";

import { AuthButtonsList } from "@/modules/AuthButtonsList";
import { getUserToken } from "@/utils/getUserToken";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const schema = yup
  .object()
  .shape({
    username: yup.string().required().min(8),
    password: yup.string().required().min(8),
    email: yup.string().required().email(),
    name: yup.string().required(),
  })
  .required();

const RegistrationForm: FC = () => {
  const { theme } = useContext(ThemeContext);
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IRegistrationForm>({
    resolver: yupResolver(schema) as any,
  });
  const { registrationError } = useAppSelector((state) => state.error);

  const onSubmit: SubmitHandler<IRegistrationForm> = async (data) => {
    await registrationUser(data, dispatch);
    await loginUser(
      { login: data.username || data.email, password: data.password },
      dispatch
    );
    await getUserToken(dispatch);
  };

  return (
    <form className={cx("registration-form")} onSubmit={handleSubmit(onSubmit)}>
      <div className={cx("registration-form__input")}>
        <Input
          {...register("username")}
          cancelled={!!registrationError}
          theme={theme}
          placeholder="Имя пользователя *"
          error={errors?.username?.message}
        />
        {errors?.username?.message && (
          <div className={cx("registration-form__error")}>
            {errors?.username?.message}
          </div>
        )}
      </div>
      <div className={cx("registration-form__input")}>
        <Input
          {...register("password")}
          cancelled={!!registrationError}
          theme={theme}
          placeholder="Пароль *"
          type="password"
          error={errors?.password?.message}
        />
        {errors?.password?.message && (
          <div className={cx("registration-form__error")}>
            {errors?.password?.message}
          </div>
        )}
      </div>
      <div className={cx("registration-form__input")}>
        <Input
          {...register("email")}
          cancelled={!!registrationError}
          theme={theme}
          placeholder="E-mail *"
          type="email"
          error={errors?.email?.message}
        />
        {errors?.email?.message && (
          <div className={cx("registration-form__error")}>
            {errors?.email?.message}
          </div>
        )}
      </div>
      <div className={cx("registration-form__input")}>
        <Input
          {...register("name")}
          cancelled={!!registrationError}
          theme={theme}
          placeholder="Имя *"
          error={errors?.name?.message}
        />
        {errors?.name?.message && (
          <div className={cx("registration-form__error")}>
            {errors?.name?.message}
          </div>
        )}
      </div>
      {registrationError && (
        <div className={cx("registration-form__error")}>
          {registrationError}
        </div>
      )}
      <AuthButtonsList text="Зарегистрироваться" />
    </form>
  );
};

export default RegistrationForm;
