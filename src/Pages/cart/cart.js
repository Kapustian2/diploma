import styled from "styled-components";
import { BuyBlock, ProductsBlock } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { SelectUserAuth, selectUserId } from "../../selectors";
import { Navigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { loadProductsAsync } from "../../actions";
import { request } from "../../utils";

export const CartContainer = ({ className }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const userId = useSelector(selectUserId);
  const dispatch = useDispatch();
  const params = useParams();
  const auth = useSelector(SelectUserAuth);

  useEffect(() => {
    dispatch(loadProductsAsync(params.userId)).then((productData) => {
      setError(productData.error);

      if (productData.data) {
        const productIds = productData.data.products.map(
          (product) => product.productId
        );

        const productDetailPromises = productIds.map((productId) =>
          request(`/products/${productId}`)
        );

        Promise.all(productDetailPromises)
          .then((productDetails) => {
            console.log("Дополнительные данные о продуктах:", productDetails);

            const productsWithDetails = productData.data.products.map(
              (product, index) => ({
                details: productDetails[index]
                  ? productDetails[index].data
                  : null,
              })
            );

            setProducts(productsWithDetails);
          })
          .catch((error) => {
            console.error(
              "Ошибка при запросе дополнительных данных о продуктах:",
              error
            );
          });
      } else {
      }
    });
  }, [dispatch, params.userId]);

  if (!auth) {
    return <Navigate to="/" />;
  }

  return (
    <div className={className}>
      <div className="cart-label">Корзина</div>
      <div className="block">
        <div className="products-block">
          <ProductsBlock products={products} />
        </div>
        <BuyBlock products={products} />
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
