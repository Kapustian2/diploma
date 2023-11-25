import styled from "styled-components";
import { Button } from "../../components";
import { BuyBlock, ProductsBlock } from "./components";

export const CartContainer = ({ className }) => {
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
