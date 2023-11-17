import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useMatch, useParams } from "react-router-dom";
import styled from "styled-components";
import { loadProductAsync } from "../../actions";
import { BreadCrumbs, Button } from "../../components";

const ProductContainer = ({ className }) => {
  const [error, setError] = useState(null);
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const isCreating = !!useMatch("/product");
  const params = useParams();

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
          <div className="title">{product.title}</div>
          <div className="category">
            <p>Категория: </p>
            {product.category}
          </div>
          <Link to="/cart">
            <Button width="344px" height="88px" fontSize="40px">
              Купить
            </Button>
          </Link>
        </div>
        <div className="price">{product.price} ₽</div>
      </div>
    </div>
  );
};

export const Product = styled(ProductContainer)`
  display: flex;
  color: #001a34;
  font-family: Inter;

  .product-info {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .product-info-left {
    margin-left: 60px;

    Button {
      margin-top: 362px;
    }
  }

  .image {
    width: 587px;
    height: 587px;
    flex-shrink: 0;
    padding-left: 60px;
  }

  .title {
    font-size: 40px;
    font-weight: 700;
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
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
