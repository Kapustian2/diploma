import { useEffect, useState } from "react";
import styled from "styled-components";
import { request } from "../../../utils";
import { Input } from "../../../components";
import { useDispatch } from "react-redux";
import { deleteProduct, saveProductAsync } from "../../../actions";
import { PAGINATION_LIMIT } from "../../../constants";
import { Pagination } from "../../main/components";

const ProductsBlockContainer = ({ className }) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [isEdit, setIsEdit] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const dispatch = useDispatch();

  const handleInputChange = (event, index, field) => {
    const updatedProducts = [...products];
    updatedProducts[index][field] = event.target.value;
    setProducts(updatedProducts);
  };

  const handleEdit = (index) => {
    setActiveIndex(index);
    setIsEdit(true);
  };

  const onSave = (id, title, category, price, sale, imageUrl) => {
    setActiveIndex(null);
    setIsEdit(false);

    const numericPrice = parseFloat(price);
    const numericSale = parseFloat(sale);

    dispatch(
      saveProductAsync(id, {
        title: title,
        price: numericPrice,
        category: category,
        imageUrl: imageUrl,
        sale: numericSale,
      })
    );
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id)).then(() => {
      setProducts(products.filter((product) => product.id !== id));
    });
  };

  useEffect(() => {
    request(`/products?&page=${page}&limit=${PAGINATION_LIMIT}`)
      .then((response) => {
        if (response.data && Array.isArray(response.data)) {
          setProducts(response.data);
          setLastPage(response.lastPage);
        } else {
          console.error("Некорректный формат данных:", response);
        }
      })
      .catch((error) => {
        console.error("Ошибка запроса на сервер:", error);
      });
  }, [page]);

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
      {products.map(({ id, title, price, sale, category, imageUrl }, index) => (
        <div className="things" key={id}>
          <Input
            className="id"
            value={id}
            borderRadius="10px"
            disabled={
              !isEdit || (activeIndex !== null && activeIndex !== index)
            }
          />
          <Input
            className="title"
            value={title}
            borderRadius="10px"
            disabled={
              !isEdit || (activeIndex !== null && activeIndex !== index)
            }
            onChange={(event) => handleInputChange(event, index, "title")}
          />
          <Input
            className="category"
            value={category}
            borderRadius="10px"
            disabled={
              !isEdit || (activeIndex !== null && activeIndex !== index)
            }
            onChange={(event) => handleInputChange(event, index, "category")}
          />
          <Input
            className="price"
            value={price}
            borderRadius="10px"
            disabled={
              !isEdit || (activeIndex !== null && activeIndex !== index)
            }
            onChange={(event) => handleInputChange(event, index, "price")}
          />
          <Input
            className="sale"
            value={sale}
            borderRadius="10px"
            disabled={
              !isEdit || (activeIndex !== null && activeIndex !== index)
            }
            onChange={(event) => handleInputChange(event, index, "sale")}
          />

          <Input
            className="imageUrl"
            value={imageUrl}
            borderRadius="10px"
            disabled={
              !isEdit || (activeIndex !== null && activeIndex !== index)
            }
            onChange={(event) => handleInputChange(event, index, "imageUrl")}
          />
          <div className="edit">
            {activeIndex !== index ? (
              <img
                src={"/edit-icon.svg"}
                alt="edit-icon"
                onClick={() => handleEdit(index)}
              />
            ) : (
              <img
                src={"/save-icon.svg"}
                alt="save-icon"
                onClick={() => {
                  onSave(id, title, category, price, sale, imageUrl);
                }}
              />
            )}
            <img
              src="/delete-icon.svg"
              alt="delete-icon"
              onClick={() => handleDelete(id)}
            />
          </div>
        </div>
      ))}
      <Pagination
        page={page}
        lastPage={lastPage}
        setPage={setPage}
      ></Pagination>
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

      width: 70px;
      margin-left: 8px;
    }

    .title {
      width: 244px;
      margin-left: 8px;
    }

    .category {
      width: 220px;
      margin-left: 8px;
    }

    .price {
      width: 173px;
      margin-left: 8px;
    }

    .sale {
      width: 67px;
      margin-left: 8px;
    }

    .imageUrl {
      width: 261px;
      margin-left: 8px;
    }

    .edit {
      width: 109px;
      height: 44px;
      margin-left: 8px;
      display: flex;
      justify-content: space-between;
      border: 1px solid black;
      border-radius: 10px;
      background-color: #f91155;
      &:hover {
        cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
      }
    }
    .sale.disabled {
      pointer-events: none;
    }
  }

  input {
    text-align: center;
  }
`;
