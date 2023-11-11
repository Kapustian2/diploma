import { useDispatch, useSelector, useStore } from "react-redux";
import { useForm } from "react-hook-form";
import { Button, FormField } from "../../components";
import { Link, Navigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import styled from "styled-components";
import { setUser } from "../../actions";
import { request } from "../../utils";
import { SelectUserAuth } from "../../selectors";

const regFormSchema = yup.object().shape({
  login: yup
    .string()
    .required("Заполните логин")
    .matches(
      /^\w+$/,
      "Неверно заполнен логин. Допускается только буквы и цифры"
    )
    .min(3, "Неверно заполнен логин. Минимум 3 символа")
    .max(15, "Неверно заполнен логин. Максимум 15 символов"),
  password: yup
    .string()
    .required("Заполните пароль")
    .matches(
      /^[\w#%!_-]+$/,
      "Неверно заполнен пароль. Допускаются буквы, цифры, % # ! _ -"
    )
    .min(6, "Неверно заполнен пароль. Минимум 6 символа")
    .max(25, "Неверно заполнен пароль. Максимум 25 символов"),
  passcheck: yup
    .string()
    .required("Повторите пароль")
    .oneOf([yup.ref("password"), null], "Пароли не совпадают"),
});

const StyledLink = styled(Link)`
  text-align: center;
  color: #001a34;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-bottom: 15px;
  margin-top: -0px;
`;

export const RegisterContaner = ({ className }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: "",
      password: "",
      passcheck: "",
    },
    resolver: yupResolver(regFormSchema),
  });

  const dispatch = useDispatch();

  const [serverError, setServerError] = useState(null);

  const store = useStore();
  const auth = useSelector(SelectUserAuth);

  const onSubmit = ({ login, password }) => {
    request("/register", "POST", { login, password }).then(
      ({ error, user }) => {
        if (error) {
          setServerError(`Ошибка запроса: ${error}`);
          return;
        }

        dispatch(setUser(user));
        sessionStorage.setItem("userData", JSON.stringify(user));
      }
    );
  };

  const handleBlur = () => {};

  if (auth) {
    return <Navigate to="/" />;
  }

  const formError =
    errors?.login?.message ||
    errors?.password?.message ||
    errors?.passcheck?.message;

  return (
    <div className={className}>
      <div className="form-block">
        <div className="form-header">
          <Link to="/">
            <img src="/gozon-logo-without-border.svg" alt="Logo" />
          </Link>
          <span className="form-title">Регистрация</span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-fields">
            <FormField
              type="text"
              placeholder="Логин"
              {...register("login", {
                onChange: () => setServerError(null),
              })}
              errorMessage={errors?.login?.message}
              className="form-field"
            />
            <FormField
              type="password"
              placeholder="Пароль"
              {...register("password", {
                onChange: () => setServerError(null),
              })}
              errorMessage={errors?.password?.message}
              className="form-field"
            />
            <FormField
              type="password"
              placeholder="Повторите пароль"
              {...register("passcheck", {
                onChange: () => setServerError(null),
              })}
              errorMessage={errors?.passcheck?.message}
              className="form-field"
            />
          </div>
          <Button type="submit" disabled={!!formError}>
            Зарегистрироваться
          </Button>
        </form>
        <StyledLink to="/login" className="register-bottom">
          Войти
        </StyledLink>
      </div>
    </div>
  );
};

export const Register = styled(RegisterContaner)`
  display: flex;
  justify-content: center;
  align-items: center;

  .form-block {
    display: grid;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 586px;
    height: 543px;
    border-radius: 20px;
    background: #fff;
    box-shadow: -4px 13px 30px 0px rgba(0, 0, 0, 0.1),
      -17px 53px 55px 0px rgba(0, 0, 0, 0.09),
      -37px 119px 75px 0px rgba(0, 0, 0, 0.05),
      -66px 211px 88px 0px rgba(0, 0, 0, 0.01),
      -104px 330px 97px 0px rgba(0, 0, 0, 0);
  }

  .form-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    gap: 32px;
    padding-top: 20px;
    padding-bottom: 24px;
  }

  form {
    display: flex;
    width: 328px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .form-fields {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    gap: 12px;
  }

  .form-title {
    color: #000;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .input {
    padding-inline: 10px;
  }

  Button {
    width: 100%;
    margin-top: 20px;
  }

  .register-bottom {
    margin-top: 12px;
    margin-bottom: 60px;
  }
`;
