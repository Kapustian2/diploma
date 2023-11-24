import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonToAddCart, CounterToCart } from "./components";
import { useState } from "react";
import { SaleBadge } from "../../../product/components";

const ProductCardContainer = ({
  className,
  id,
  title,
  price,
  sale,
  imageUrl,
  priceWithDiscount,
}) => {
  const [isAddToCart, setIsAddToCart] = useState(false);
  const [isCounterVisible, setIsCounterVisible] = useState(false);

  const handleClick = () => {
    setIsAddToCart((prevState) => !prevState);
    setIsCounterVisible(true);
  };

  return (
    <div className={className}>
      {sale ? (
        <div className="sale">
          <SaleBadge width="102px" height="49px">
            {"-" + sale + "%"}
          </SaleBadge>
        </div>
      ) : null}
      <Link to={`/product/${id}`} className="product-with-button">
        <img src={imageUrl} alt={title} className="image" />
        <div className="product-info">
          {sale ? (
            <div className="price">{priceWithDiscount} ₽ </div>
          ) : (
            <div className="price">{price} ₽ </div>
          )}
          <div className="title">{title}</div>
        </div>
      </Link>

      {isCounterVisible ? (
        <CounterToCart
          onClick={handleClick}
          onCounterEmpty={() => setIsCounterVisible(false)}
        >
          Добавлено в корзину
        </CounterToCart>
      ) : (
        <ButtonToAddCart onClick={handleClick}>
          Добавить в корзину
        </ButtonToAddCart>
      )}
    </div>
  );
};

export const ProductCard = styled(ProductCardContainer)`
  display: flex;
  width: 280px;
  margin-top: 20px;
  flex-direction: column;
  align-items: center;

  .product-with-button {
    display: grid;
    justify-items: center;
  }

  .title {
    color: #001a34;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 24px;
  }

  .price {
    color: #f91155;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 8px;
    margin-bottom: 6px;
  }

  .sale {
    position: absolute;
    width: 217px;
    margin-top: 10px;
  }

  .image {
    width: 241px;
    height: 241px;
  }
`;
