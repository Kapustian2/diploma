import React from "react";
import { Button } from "../../../../components";
import styled from "styled-components";

const BuyBlockContainer = ({ className }) => {
  return (
    <div className={className}>
      <Button width="555px" height="69px" background="#10C44C">
        Перейти к оформлению
      </Button>
      <label className="u-cart">Ваша корзина</label>
      <label className="products">Товары</label>
      <label className="discount">Скидка</label>
      <label className="total">Итого:</label>
    </div>
  );
};

export const BuyBlock = styled(BuyBlockContainer)`
  display: flex;
  font-family: Inter;
  flex-direction: column;
  width: 587px;
  height: 373px;
  padding: 20px;
  margin: 40px 0 0 20px;
  border-radius: 20px;
  background: #fff;

  button {
    align-self: center;
  }
  .u-cart {
    margin: 20px 0 0 16px;
    color: #001a34;
    font-size: 20px;
    font-weight: 700;
  }

  .products {
    margin: 27px 0 0 16px;
  }

  .discount {
    margin: 25px 0 0 16px;
  }

  .total {
    margin: 62px 0 0 16px;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
