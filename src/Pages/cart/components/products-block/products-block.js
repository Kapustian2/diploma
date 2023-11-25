import React from "react";
import styled from "styled-components";
import { CheckBox } from "../../../../components";

const ProductsBlockContainer = ({ className }) => {
  return (
    <div className={className}>
      <div className="header">
        <CheckBox /> Выбрать всё
        <span className="delete-all">Удалить выбранное</span>
      </div>
      <div className="line" />
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
