import { useEffect, useState } from "react";
import styled from "styled-components";
import { request } from "../../../utils";
import { Input } from "../../../components";

const ProductsBlockContainer = ({ className }) => {
  const [products, setProducts] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleEdit = () => {
    console.log("edit");
    setIsEdit(!isEdit);
  };

  const handleDelete = () => {
    console.log("delete");
  };

  const handleSale = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, sale: !product.sale } : product
      )
    );
  };

  useEffect(() => {
    request(`/products`)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else {
          console.error("Некорректный формат данных:", response);
        }
      })
      .catch((error) => {
        console.error("Ошибка запроса на сервер:", error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(isEdit);
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
      {products.map(({ id, title, price, category, sale, imageUrl }) => (
        <div className="things">
          <Input
            className="id"
            value={`${id}`}
            borderRadius="10px"
            onChange={handleInputChange}
          />
          <Input
            className="title"
            value={`${title}`}
            borderRadius="10px"
            onChange={handleInputChange}
          />
          <Input
            className="category"
            value={`${category}`}
            borderRadius="10px"
            onChange={handleInputChange}
          />
          <Input
            className="price"
            value={`${price}`}
            borderRadius="10px"
            onChange={handleInputChange}
          />

          <div className="sale" onClick={() => isEdit && handleSale(id)}>
            {sale ? <span>Yes</span> : <span>No</span>}
          </div>

          <Input
            className="imageUrl"
            value={`${imageUrl}`}
            borderRadius="10px"
            onChange={handleInputChange}
          />
          <div className="edit">
            <img
              src={isEdit ? "/delete-icon.svg" : "/edit-icon.svg"}
              alt="edit-icon"
              onClick={handleEdit}
            />
            <img
              src="/delete-icon.svg"
              alt="delete-icon"
              onClick={handleDelete}
            />
          </div>
        </div>
      ))}
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

  .things {
    display: flex;
    justify-content: center;
    font-family: Inter;
    font-size: 20px;
    border-radius: 10px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 44px;
    margin-top: 32px;
    margin-bottom: 28px;

    Input {
      background-color: #f91155;
      color: #f2f5f7;
    }

    .id {
      flex-direction: column;

      width: 50px;
      margin-left: 12px;
    }

    .title {
      width: 192px;
      margin-left: 16px;
    }

    .category {
      width: 168px;
      margin-left: 60px;
    }

    .price {
      width: 101px;
      margin-left: 60px;
    }

    .sale {
      width: 67px;
      height: 44px;
      border-radius: 10px;
      background-color: #f91155;
      color: #f2f5f7;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-content: space-around;
      flex-direction: column;
      margin-left: 80px;
      &:hover {
        cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
      }
    }

    .imageUrl {
      width: 96px;
      margin-left: 67px;
    }

    .edit {
      width: 109px;
      height: 44px;
      margin-left: 97px;
      display: flex;
      justify-content: space-between;
      border: 1px solid black;
      background-color: #f91155;
      &:hover {
        cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
      }
    }
    .sale.disabled {
      pointer-events: none;
    }
  }
`;
