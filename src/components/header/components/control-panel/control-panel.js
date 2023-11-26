import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  SelectUserAuth,
  SelectUserRole,
  selectUserId,
  selectUserLogin,
} from "../../../../selectors";
import styled from "styled-components";
import { ROLE } from "../../../../constants";

const ControlPanelContainer = ({ className }) => {
  const auth = useSelector(SelectUserAuth);
  const login = useSelector(selectUserLogin);
  const role = useSelector(SelectUserRole);
  const userId = useSelector(selectUserId);

  return (
    <div className={className}>
      {role === ROLE.ADMIN ? (
        <Link to="/adminpanel">
          <div className="link-content">
            <img src="/icon-menu-admin.svg" />
            <span className="link-text">Админ</span>
          </div>
        </Link>
      ) : null}
      {auth ? (
        <Link to={`/profile/${userId}`}>
          <div className="link-content">
            <img src="/icon-person.svg" />
            <span className="link-text">{login}</span>
          </div>
        </Link>
      ) : (
        <Link to="/login">
          <div className="link-content">
            <img src="/icon-person.svg" />
            <span className="link-text">Войти</span>
          </div>
        </Link>
      )}
      <Link to={`/cart/${userId}`} className="link">
        <div className="link-content">
          <img src="/icon-shopping-cart.svg" />

          <span className="link-text">Корзина</span>
        </div>
      </Link>
    </div>
  );
};

export const ControlPanel = styled(ControlPanelContainer)`
  display: flex;
  flex-direction: row;
  align-items: center;
  place-content: end;
  height: 100%;
  padding-right: 60px;
  gap: 60px;

  img {
    height: 30px;
    width: 30px;
  }

  .link-content {
    display: flex;
    flex-direction: column;
    width: 66px;
    gap: 4px;
    align-items: center;
    text-align: center;
  }

  .link-text {
    color: #fff;
    font-family: Inter;
  }
`;
