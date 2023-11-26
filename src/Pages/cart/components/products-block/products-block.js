import styled from "styled-components";
import { CheckBox } from "../../../../components";
import { ProductCard } from "./components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductInCart } from "../../../../actions";
import { selectUserId } from "../../../../selectors";

const ProductsBlockContainer = ({ className, products }) => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [product, setProduct] = useState("");
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);

  const handleSelectAll = () => {
    setSelectedProducts(products.map((product) => product.details.id));
  };

  const handleSelectProduct = (id) => {
    setSelectedProducts((prevSelectedProducts) => {
      if (prevSelectedProducts.includes(id)) {
        return prevSelectedProducts.filter((item) => item !== id);
      } else {
        return [...prevSelectedProducts, id];
      }
    });
  };

  const handleDelete = () => {
    if (selectedProducts.length === 0) {
      return;
    }

    dispatch(deleteProductInCart(userId, selectedProducts)).then(() => {
      setSelectedProducts([]);
    });
  };

  return (
    <div className={className}>
      <div className="header">
        <CheckBox
          checked={selectedProducts.length === products.length}
          onChange={handleSelectAll}
        />
        Выбрать всё
        <span className="delete-all" onClick={handleDelete}>
          Удалить выбранное
        </span>
      </div>
      <div className="line" />
      <div>
        {products.length > 0 ? (
          products.map((product, index) => (
            <ProductCard
              key={index}
              id={product.details.id}
              title={product.details.title}
              imageUrl={product.details.imageUrl}
              sale={product.details.sale}
              price={product.details.price}
              priceWithDiscount={product.details.priceWithDiscount}
              isSelected={selectedProducts.includes(product.details.id)}
              onSelect={() => handleSelectProduct(product.details.id)}
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
