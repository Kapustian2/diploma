import styled from "styled-components";
import { Card, CardContent, CardFooter } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import {
  SelectUserAuth,
  SelectUserRole,
  selectUserCreatedAt,
  selectUserLogin,
} from "../../selectors";
import { ROLE_STRINGS } from "../../constants";
import { Navigate } from "react-router-dom";
import { logout } from "../../actions";

export const UserProfileContainer = ({ className }) => {
  const userRole = useSelector(SelectUserRole);
  const userLogin = useSelector(selectUserLogin);
  const userCreatedAt = useSelector(selectUserCreatedAt);
  const auth = useSelector(SelectUserAuth);
  const dispatch = useDispatch();

  const date = Intl.DateTimeFormat("ru-RU").format(new Date(userCreatedAt));

  const onLogout = () => {
    dispatch(logout());
    sessionStorage.removeItem("userData");
  };

  if (!auth) {
    return <Navigate to="/" />;
  }

  return (
    <div className={className}>
      <Card>
        <CardContent>
          <div className="user-info">
            <img
              src="/default-avatar.jpg"
              alt={`${userLogin} аватар`}
              className="avatar"
            />
            <div className="user-login">{userLogin}</div>
            <div className="user-role">{ROLE_STRINGS[userRole]}</div>
            <div className="user-createdAt">На сайте с {date}</div>
          </div>
        </CardContent>
        <CardFooter onClick={onLogout} className="card-footer">
          Выйти из аккаунта
        </CardFooter>
      </Card>
    </div>
  );
};

export const UserProfile = styled(UserProfileContainer)`
  display: flex;
  justify-content: center;
  align-items: center;

  .user-info {
    place-content: center;
    height: 100%;
    text-align: center;
    padding-bottom: 155px;
    font-family: Inter;
    font-size: 16px;
    padding-top: 20px;

    .avatar {
      border-radius: 200px;
      border: 1px dashed black;
      height: 200px;
      width: 200px;
    }
  }

  .card-footer {
    font-family: Inter;
    font-size: 16px;
    color: red;

    &:hover {
      cursor: pointer;
    }
  }

  .user-login {
    padding-top: 16px;
    padding-bottom: 12px;
    font-size: 24px;
  }

  .user-role {
    padding-bottom: 24px;
  }
`;
