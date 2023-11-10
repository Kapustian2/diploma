import { Link } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux";
import {
  SelectUserRole,
  selectUserId,
  selectUserLogin,
  selectUserSession,
} from "../../../../selectors";
import { ROLE } from "../../../../constants/index";
import styled from "styled-components";

const ControlPanelContainer = ({ className }) => {
  const roleId = useSelector(SelectUserRole);
  const userId = useSelector(selectUserId);
  const login = useSelector(selectUserLogin);
  const session = useSelector(selectUserSession);

  return (
    <div className={className}>
      {roleId === ROLE.GUEST ? (
        <Link to="/login">
          <div className="link-content">
            <img src="/icon-person.svg" />
            <span className="link-text">Войти</span>
          </div>
        </Link>
      ) : (
        <Link to="/profile/:userId">
          <div className="link-content">
            <img src="/icon-person.svg" />
            <span className="link-text">${login}</span>
          </div>
        </Link>
      )}
      <Link to="/cart" className="link">
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
    height: fit-content;
    color: #fff;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
