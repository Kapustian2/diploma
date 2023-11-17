import styled from "styled-components";

const ProductsBlockContainer = ({ className }) => {
  return (
    <div className={className}>
      <div className="head">
        <span>ID</span>
        <span>Name</span>
        <span>Category</span>
        <span>Price</span>
        <span>Sale</span>
        <span>Photo</span>
        <span>Edit</span>
      </div>
    </div>
  );
};

export const ProductsBlock = styled(ProductsBlockContainer)`
  height: 869px;

  .head {
    display: flex;
    width: 1192px;
    height: 86px;
    padding: 28px 0px 29px 0px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 40px 40px 0px 0px;
    background: #005bff;
    color: #fff;
    font-family: Inter;
    font-size: 24px;
    gap: 113px;
  }
`;
