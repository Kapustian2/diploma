import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CheckBox } from "../../../../components";
import { ProductCard } from "./components";
import { request } from "../../../../utils";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectUserId } from "../../../../selectors";
import { loadProductsAsync } from "../../../../actions";

const ProductsBlockContainer = ({ className, products }) => {
  return (
    <div className={className}>
      <div className="header">
        <CheckBox /> Выбрать всё
        <span className="delete-all">Удалить выбранное</span>
      </div>
      <div className="line" />
      <div>
        {products.length > 0 ? (
          products.map((product, index) => (
            <ProductCard
              title={product.details.title}
              imageUrl={product.details.imageUrl}
              sale={product.details.sale}
              price={product.details.price}
              priceWithDiscount={product.details.priceWithDiscount}
            />
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
