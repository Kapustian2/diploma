import { Button, FormField } from "../../components";
import { Link, Navigate } from "react-router-dom";
import * as yup from "yup";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { request } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../actions";
import { useState } from "react";
import { ROLE } from "../../constants";
import { SelectUserAuth, SelectUserRole } from "../../selectors";

const StyledLink = styled(Link)`
  text-align: center;
  color: #001a34;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-bottom: 15px;
  margin-top: -20px;
`;

const loginFormSchema = yup.object().shape({
  login: yup
    .string()
    .required("Заполните логин")
    .matches(/^\w+$/, "Допускаются только буквы и цифры")
    .min(3, "Минимум 3 символа")
    .max(15, "Максимум 15 символа"),
  password: yup
    .string()
    .required("Заполните пароль")
    .matches(
      /^[\w#%]+$/,
      "Неверно заполнен пароль. Допускаются буквы, цифры, % # "
    )
    .min(5, "Минимум 5 символа")
    .max(30, "Максимум 30 символа"),
});

export const LoginContaner = ({ className }) => {
  const dispatch = useDispatch();
  const [serverError, setServerError] = useState(null);

  const auth = useSelector(SelectUserAuth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: "",
      password: "",
    },
    resolver: yupResolver(loginFormSchema),
  });

  const onSubmit = ({ login, password }) => {
    request("/login", "POST", { login, password }).then(({ error, user }) => {
      if (error) {
        console.error("Ошибка при запросе:", error);
        setServerError(
          "Произошла ошибка при входе. Пожалуйста, попробуйте снова."
        );
        return;
      }

      dispatch(setUser(user));
      sessionStorage.setItem("userData", JSON.stringify(user));
    });
  };

  if (auth) {
    return <Navigate to="/" />;
  }

  return (
    <div className={className}>
      <div className="form-block">
        <div className="form-header">
          <Link to="/">
            <img src="/gozon-logo-without-border.svg" alt="Logo" />
          </Link>
          <span className="form-title">Вход</span>
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
          </div>
          <Button type="submit" height="49px" fontSize="24px">
            Войти
          </Button>
        </form>
        <StyledLink to="/register" className="register-bottom">
          Зарегистрироваться
        </StyledLink>
      </div>
    </div>
  );
};

export const Login = styled(LoginContaner)`
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
    margin-bottom: 60px;
  }
`;
