import { styled, withTheme } from "styled-components";
import { request } from "../../utils";
import { useEffect, useState } from "react";
import { Pagination, ProductCard } from "./components";
import { PAGINATION_LIMIT } from "../../constants";

const MainContainer = ({ className, searchPhrase }) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [select, setSelect] = useState("");

  const handleSelectSort = (event) => {
    setSelect(event.target.value);
  };

  useEffect(() => {
    request(
      `/products?search=${
        !searchPhrase ? "" : searchPhrase
      }&page=${page}&limit=${PAGINATION_LIMIT}`
    )
      .then((response) => {
        if (response.data && Array.isArray(response.data)) {
          setProducts(response.data);
          setLastPage(response.pagination.lastPage);
        } else {
          console.error("Некорректный формат данных:", response);
        }
      })
      .catch((error) => {
        console.error("Ошибка запроса на сервер:", error);
      });
  }, [page, searchPhrase]);

  return (
    <div className={className}>
      <div className="category">
        <div>
          <h1>Категории</h1>
        </div>
        <div className="categories">
          <div>
            <img src="/icon-menu-book.svg" />
            <span>Книги</span>
          </div>
          <div>
            <img src="/icon-menu-life.svg" />
            <span>Бытовая техника</span>
          </div>
          <div>
            <img src="/icon-menu-build.svg" />
            <span>Строительство</span>
          </div>
          <div>
            <img src="/icon-menu-cloth.svg" />
            <span>Одежда</span>
          </div>
          <div>
            <img src="/icon-menu-electro.svg" />
            <span>Электроника</span>
          </div>
        </div>
        <div className="sale-banner">
          <img src="/sale-banner.png" alt="sale-banner"></img>
        </div>
      </div>
      <div className="main-page">
        <div className="sort-select">
          <select id="sort" value={select} onChange={handleSelectSort}>
            <option value="option1">Сначала дешевые</option>
            <option value="option2">Сначала дорогие</option>
          </select>
        </div>
        <div className="products">
          {products.map(({ id, title, price, imageUrl, sale }) => (
            <div>
              <ProductCard
                key={id}
                id={id}
                title={title}
                imageUrl={imageUrl}
                price={price}
                sale={sale}
              />
            </div>
          ))}
        </div>
        <div className="pagination">
          <Pagination
            page={page}
            lastPage={lastPage}
            setPage={setPage}
          ></Pagination>
        </div>
      </div>
    </div>
  );
};

export const Main = styled(withTheme(MainContainer))`
  display: flex;
  text-align: center;
  text-align: center;
  margin-top: 90px;

  .main-page {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    margin-left: 20px;
  }

  .categories {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 30px;
    margin-top: 20px;
  }

  .category {
    width: 343px;
    height: 461px;
    margin-top: 20px;
    border-radius: 0px 20px 20px 0px;
    background: #f91155;
    color: #fff;
    font-family: Inter;
    font-size: 24px;
  }

  .products {
    display: flex;
    flex-wrap: wrap;
  }

  .sort-select select {
    width: 403px;
    height: 45px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid #001a34;
    background: #f2f5f7;
    outline: none;
    appearance: none;
    font-size: 16px;
    color: #001a34;
  }

  .sale-banner {
    width: 343px;
    height: 459px;
    flex-shrink: 0;
    margin-top: 140px;
  }

  h1 {
    text-align: center;
  }
`;
