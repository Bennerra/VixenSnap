import React, { FC, useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import classNames from "classnames/bind";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Input } from "@/ui/Input";
import { Button } from "@/ui/Button";
import { registrationUser } from "@/modules/RegistrationForm/registration";

import { IRegistrationForm } from "@/modules/RegistrationForm/models/IRegistrationForm";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { ThemeContext } from "@/context";
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
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IRegistrationForm>({
    resolver: yupResolver(schema) as any,
  });
  const { theme } = useContext(ThemeContext);
  const { error } = useAppSelector((state) => state.error);

  const onSubmit: SubmitHandler<IRegistrationForm> = async (data) => {
    await registrationUser(data, dispatch);
    // eslint-disable-next-line
		console.log(data);
  };

  return (
    <form className={cx("registration-form")} onSubmit={handleSubmit(onSubmit)}>
      <div className={cx("registration-form__input")}>
        <Input
          {...register("username")}
          registered={!!error}
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
          registered={!!error}
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
          registered={!!error}
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
          registered={!!error}
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
      {error && <div className={cx("registration-form__error")}>{error}</div>}
      <Button
        type="submit"
        text="Зарегистрироваться"
        color="orange"
        size="big"
      />
    </form>
  );
};

export default RegistrationForm;
