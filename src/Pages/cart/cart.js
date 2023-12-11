import styled from "styled-components";
import { BuyBlock, ProductsBlock } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { SelectUserAuth, selectUserId } from "../../selectors";
import { Navigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { loadProductAsync, loadProductsAsync } from "../../actions";
import { request } from "../../utils";
import { selectUserCartProductIds } from "../../selectors/select-products-id";

export const CartContainer = ({ className }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const [productsData, setProductsData] = useState([]);
  const auth = useSelector(SelectUserAuth);
  const productsInCart = useSelector(selectUserCartProductIds);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await Promise.all(
          productsInCart.map((productId) =>
            dispatch(loadProductsAsync(productId))
          )
        );

        setProductsData(productsData);
      } catch (error) {
        setError(error);
      }
    };

    fetchProducts();
  }, [dispatch, productsInCart]);

  console.log(productsData);

  if (!auth) {
    return <Navigate to="/" />;
  }

  return (
    <div className={className}>
      <div className="cart-label">Корзина</div>
      <div className="block">
        <div className="products-block">
          <ProductsBlock products={productsData} />
        </div>
        <BuyBlock products={productsData} />
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
