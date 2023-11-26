import styled from "styled-components";
import { CheckBox, SaleBadge } from "../../../../../components";

const ProductCardContainer = ({
  className,
  title,
  imageUrl,
  sale,
  price,
  priceWithDiscount,
}) => {
  return (
    <div className={className}>
      <CheckBox />
      <img src={imageUrl} alt={title} className="image" />
      <div className="sides">
        <div className="left-side">
          <div className="title">{title}</div>
          {sale ? (
            <SaleBadge width="102px" height="49px" className="sale-badge">
              Sale
            </SaleBadge>
          ) : null}
          <img
            src="/delete-from-cart-icon.png"
            alt="garbage"
            className="garbage"
          />
        </div>

        <div className="right-side">
          {sale ? (
            <div className="priceSale">
              <div className="priceWithDiscount">{priceWithDiscount} ₽</div>
              <div className="old-price">{price} ₽</div>
            </div>
          ) : (
            <div className="price">
              <div>{price} ₽</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const ProductCard = styled(ProductCardContainer)`
  display: flex;

  .image {
    width: 194px;
    height: 194px;
  }

  .garbage {
    width: 25px;
    height: 25px;
  }

  .sides {
    display: flex;
    width: 1161px;

    justify-content: space-between;
  }

  .left-side {
    display: flex;
    flex-direction: column;
    .title {
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-bottom: 20px;
    }

    .sale-badge {
      margin-bottom: 42px;
    }
  }

  .right-side {
    margin-right: 30px;
  }

  .old-price {
    text-decoration: line-through;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .priceWithDiscount {
    color: #f91155;
    font-size: 20px;
    font-weight: 700;
  }

  .price {
    font-size: 20px;
    font-weight: 700;
  }
`;
