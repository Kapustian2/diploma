import { Link } from "react-router-dom";
import styled from "styled-components";

const ControlPanelContainer = ({ className }) => {
  return (
    <div className={className}>
      <Link to="/login">
        <div className="link-content">
          <img src="/icon-person.svg" />
          <span className="link-text">Войти</span>
        </div>
      </Link>
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
