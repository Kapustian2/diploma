import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./components";

const ProductCardContainer = ({ className, id, title, price, imageUrl }) => {
  return (
    <div className={className}>
      <Link to={`/product/${id}`}>
        <img src={imageUrl} alt={title} className="image"></img>
        <div className="product-info">
          <div className="price">{price} ₽</div>
          <div className="title">{title}</div>
        </div>
        <Button>Добавить в корзину</Button>
      </Link>
    </div>
  );
};

export const ProductCard = styled(ProductCardContainer)`
  display: flex;
  width: 280px;
  margin: 20px;
  flex-direction: column;
  align-items: center;

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

  .image {
    width: 241px;
    height: 241px;
  }
`;
