import styled from "styled-components";
import { BuyBlock, ProductsBlock } from "./components";
import { useSelector } from "react-redux";
import { SelectUserAuth } from "../../selectors";
import { Navigate } from "react-router-dom";

export const CartContainer = ({ className }) => {
  const auth = useSelector(SelectUserAuth);

  if (!auth) {
    return <Navigate to="/" />;
  }

  return (
    <div className={className}>
      <div className="cart-label">Корзина</div>
      <div className="block">
        <div className="products-block">
          <ProductsBlock />
        </div>
        <BuyBlock />
      </div>
    </div>
  );
};

export const Cart = styled(CartContainer)`
  padding-top: 90px;

  .cart-label {
    padding: 95px 0 0 60px;
    color: #001a34;
    font-family: Inter;
    font-size: 40px;
    font-weight: 700;
  }

  .products-block {
    margin: 40px 0 0 60px;
  }

  .block {
    display: flex;
  }

  .buy-block {
  }
`;
