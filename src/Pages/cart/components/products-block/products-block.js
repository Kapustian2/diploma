import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CheckBox } from "../../../../components";
import { ProductCard } from "./components";
import { request } from "../../../../utils";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectUserId } from "../../../../selectors";
import { loadProductsAsync } from "../../../../actions";

const ProductsBlockContainer = ({ className }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const userId = useSelector(selectUserId);
  const dispatch = useDispatch();
  const params = useParams();

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

  console.log("products", products);

  return (
    <div className={className}>
      <div className="header">
        <CheckBox /> Выбрать всё
        <span className="delete-all">Удалить выбранное</span>
      </div>
      <div className="line" />
      <ProductCard />
      <div>
        {products.length > 0 ? (
          products.map((product, index) => (
            <ProductCard title={product.details.title} />
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export const ProductsBlock = styled(ProductsBlockContainer)`
  width: 1193px;
  min-height: 200px;
  font-family: Inter;
  border-radius: 20px;
  background: #fff;

  .header {
    padding-top: 28.5px;
    display: flex;
    gap: 20px;
    margin-left: 26px;

    .delete-all {
      color: #f91155;
      font-size: 16px;
    }
  }
  .line {
    margin-top: 20px;
    width: 1161px;
    height: 1px;
    opacity: 0.1;
    background: #001a34;
  }
`;
