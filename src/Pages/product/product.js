import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useMatch, useParams } from "react-router-dom";
import styled from "styled-components";
import { loadProductAsync } from "../../actions";
import { SaleBadge } from "../../components";
import { SelectUserAuth, selectUserId } from "../../selectors";
import { ButtonToAddCart } from "../main/components/product-card/components";

const ProductContainer = ({ className }) => {
  const [error, setError] = useState(null);
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const isCreating = !!useMatch("/product");
  const params = useParams();
  const userId = useSelector(selectUserId);
  const auth = useSelector(SelectUserAuth);

  useEffect(() => {
    if (isCreating) {
      setIsLoading(false);
      return;
    }

    dispatch(loadProductAsync(params.productId)).then((productData) => {
      setError(productData.error);
      setProduct(productData.data);
      setIsLoading(false);
    });
  }, [dispatch, params.productId, isCreating]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={className}>
      <img src={product.imageUrl} alt={product.title} className="image"></img>

      <div className="product-info">
        <div className="product-info-left">
          <div className="title">
            {product.sale ? (
              <>
                {" "}
                {product.title}{" "}
                <SaleBadge width="104px" height="49px">
                  {"-" + product.sale + "%"}
                </SaleBadge>{" "}
              </>
            ) : (
              <span>{product.title} </span>
            )}
          </div>
          <div className="category">
            <p>Категория: </p>
            {product.category}
          </div>
          {product.sale ? (
            <SaleBadge width="102px" height="49px">
              Sale
            </SaleBadge>
          ) : null}
          <Link to={`/cart/${userId}`}>
            {product.sale ? (
              <ButtonToAddCart
                width="344px"
                height="88px"
                fontSize="40px"
                className="button-with-sale"
                disabled={!auth}
                productId={product.id}
              >
                Купить
              </ButtonToAddCart>
            ) : (
              <ButtonToAddCart
                width="344px"
                height="88px"
                fontSize="40px"
                className="button-wo-sale"
                disabled={!auth}
                productId={product.id}
              >
                Купить
              </ButtonToAddCart>
            )}
          </Link>
        </div>
        <div className="price">
          {product.sale ? (
            <>
              <span className="price-with-sale">
                {product.priceWithDiscount} ₽{" "}
              </span>
              <span className="price-wo-sale">{product.price} ₽ </span>
            </>
          ) : (
            <span>{product.price} ₽</span>
          )}
        </div>
      </div>
    </div>
  );
};

export const Product = styled(ProductContainer)`
  display: flex;
  color: #001a34;
  font-family: Inter;
  margin-top: 250px;

  .product-info {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .product-info-left {
    margin-left: 60px;
  }
  .button-wo-sale {
    margin-top: 362px;
  }

  .button-with-sale {
    margin-top: 313px;
  }
  .image {
    width: 587px;
    height: 587px;
    flex-shrink: 0;
    padding-left: 60px;
  }

  .title {
    display: flex;
    font-size: 40px;
    font-weight: 700;
    gap: 20px;
  }

  .category {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 24px;
    font-weight: 400;
    margin-top: 60px;

    p {
      font-weight: 700;
      line-height: normal;
    }
  }

  .price {
    display: flex;
    gap: 24px;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    .price-with-sale {
      color: #f91155;
      font-size: 40px;
    }

    .price-wo-sale {
      font-size: 32px;
      text-decoration-line: line-through;
    }
  }
`;
