import React, { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import classNames from "classnames/bind";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Input } from "@/ui/Input";
import { Button } from "@/ui/Button";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

type IRegistrationForm = {
  username: string;
  password: string;
  email: string;
  name: string;
};

const schema = yup
  .object()
  .shape({
    username: yup.string().required(),
    password: yup.string().required(),
    email: yup.string().email(),
    name: yup.string().required(),
  })
  .required();

const RegistrationForm: FC = React.forwardRef<HTMLFormElement, {}>((_, ref) => {
  const { handleSubmit, register, getValues } = useForm<IRegistrationForm>({
    resolver: yupResolver(schema) as any,
  });

  const onSubmit: SubmitHandler<IRegistrationForm> = (data) =>
    // eslint-disable-next-line
    console.log(data);

  return (
    <form
      ref={ref}
      className={cx("registration-form")}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input {...register("username")} placeholder="Имя пользователя *" />
      <Input {...register("password")} placeholder="Пароль *" type="password" />
      <Input {...register("email")} placeholder="E-mail *" type="email" />
      <Input {...register("name")} placeholder="Имя *" />
      <Button
        text="Зарегистрироваться"
        color="orange"
        size="big"
        onClick={() => {
          const values = getValues();
          console.log(values);
        }}
      />
    </form>
  );
});

export default RegistrationForm;
