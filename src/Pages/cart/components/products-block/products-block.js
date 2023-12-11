import styled from "styled-components";
import { ProductCard } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductInCart, deleteProductsInCart } from "../../../../actions";
import { selectUserId } from "../../../../selectors";

const ProductsBlockContainer = ({ className, products }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteProductsInCart());
  };

  return (
    <div className={className}>
      <div className="header">
        <span className="delete-all" onClick={handleDelete}>
          Удалить всё
        </span>
      </div>
      <div className="line" />
      <div>
        {products.length > 0 ? (
          products.map((product, index) => (
            <ProductCard
              key={index}
              id={product.data.id}
              title={product.data.title}
              imageUrl={product.data.imageUrl}
              sale={product.data.sale}
              price={product.data.price}
              priceWithDiscount={product.data.priceWithDiscount}
            />
          ))
        ) : (
          <div>Корзина пустая</div>
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
      &:hover {
        cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
      }
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
