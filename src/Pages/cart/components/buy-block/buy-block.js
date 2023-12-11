import React, { useState } from "react";
import { Button } from "../../../../components";
import styled from "styled-components";

const BuyBlockContainer = ({ className, products }) => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const totalAmount = products.reduce((accumulator, product) => {
    return accumulator + (product ? product.data.price : 0);
  }, 0);

  const totalDiscount = products.reduce((accumulator, product) => {
    const price = product.data.price;
    const discountPrice = product.data.priceWithDiscount;
    const discount = price - discountPrice;

    return accumulator + discount;
  }, 0);

  const totalPrice = totalAmount - totalDiscount;

  const handleButtonClick = () => {
    setButtonClicked(true);
  };

  return (
    <div className={className}>
      <Button
        width="555px"
        height="69px"
        background={buttonClicked ? "#FF0000" : "#10C44C"}
        onClick={handleButtonClick}
      >
        {!buttonClicked ? "Перейти к оформлению" : "В данный момент недоступно"}
      </Button>
      <label className="u-cart">Ваша корзина</label>
      <div className="content-container">
        <div className="products">
          <label>Товары ({products.length})</label>
          <div className="amount">
            <label>{totalAmount} ₽</label>
          </div>
        </div>
        <div className="discount">
          <div className="discount-label">Скидка</div>
          <div className="discount-value">- {totalDiscount} ₽</div>
        </div>
        <div className="total">
          <div className="total-label">Итого:</div>
          <div className="total-value">{totalPrice} ₽</div>
        </div>
      </div>
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

  .content-container {
    display: flex;
    flex-direction: column;
  }

  .products {
    width: 555px;
    margin: 27px 0 0 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .amount {
    margin-left: auto;
    margin-right: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .discount {
    margin: 25px 0 0 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .discount-label {
    margin-right: 10px;
  }

  .discount-value {
    margin-left: auto;
    color: red;
    font-size: 20px;
    font-weight: 700;
  }

  .total {
    margin: 62px 0 0 16px;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .total-label {
    margin-right: 10px;
  }

  .total-value {
    margin-left: auto;
  }
`;
