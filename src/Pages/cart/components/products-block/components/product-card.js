import styled from "styled-components";

const ProductCardContainer = ({ title }) => {
  return (
    <div>
      <div>{title}</div>
    </div>
  );
};

export const ProductCard = styled(ProductCardContainer)``;
