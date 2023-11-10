import React, { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import classNames from "classnames/bind";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Input } from "@/ui/Input";
import { Button } from "@/ui/Button";
import { registrationUser } from "@/modules/RegistrationForm/registration";

import { IRegistrationForm } from "@/modules/RegistrationForm/models/IRegistrationForm";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const schema = yup
  .object()
  .shape({
    username: yup.string().required(),
    password: yup.string().required(),
    email: yup.string().email(),
    name: yup.string().required(),
  })
  .required();

const RegistrationForm: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IRegistrationForm>({
    resolver: yupResolver(schema) as any,
  });

  const onSubmit: SubmitHandler<IRegistrationForm> = async (data) => {
    await registrationUser(data);
    // eslint-disable-next-line
    console.log(data);
  };

  return (
    <form className={cx("registration-form")} onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("username")}
        placeholder="Имя пользователя *"
        error={errors?.username?.message}
      />
      <Input
        {...register("password")}
        placeholder="Пароль *"
        type="password"
        error={errors?.password?.message}
      />
      <Input
        {...register("email")}
        placeholder="E-mail *"
        type="email"
        error={errors?.email?.message}
      />
      <Input
        {...register("name")}
        placeholder="Имя *"
        error={errors?.name?.message}
      />
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
