import { styled, withTheme } from "styled-components";
import { request } from "../../utils";
import { useEffect, useState } from "react";
import { Pagination, ProductCard } from "./components";
import { PAGINATION_LIMIT } from "../../constants";
import { useSearch } from "../../hooks/seacrh-provider";

const MainContainer = ({ className }) => {
  const { searchPhrase } = useSearch();

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("cheap");
  const [lastPage, setLastPage] = useState(1);
  const [select, setSelect] = useState("");
  const [category, setCategory] = useState("");
  const [isSale, setIsSale] = useState(null);

  const handleSelectSort = (event) => {
    const selectedValue = event.target.value;
    setSelect(selectedValue);
    setSort(selectedValue);
  };

  const handleClickCategory = (category) => () => {
    setCategory(category);
  };

  const handleClickSale = () => () => {
    setIsSale(true);
  };

  useEffect(() => {
    request(
      `/products?search=${
        !searchPhrase ? "" : searchPhrase
      }&page=${page}&limit=${PAGINATION_LIMIT}&sort=${sort}&category=${category}${
        isSale !== null ? `&sale=${isSale}` : ""
      }`
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
  }, [page, searchPhrase, sort, category, isSale]);

  return (
    <div className={className}>
      <div className="category">
        <div>
          <h1>Категории</h1>
        </div>
        <div className="categories">
          <div
            className={`categor ${category === "book" ? "selected" : ""}`}
            onClick={handleClickCategory("book")}
          >
            <img src="/icon-menu-book.svg" />
            <span>Книги</span>
          </div>
          <div
            className={`categor ${category === "life" ? "selected" : ""}`}
            onClick={handleClickCategory("life")}
          >
            <img src="/icon-menu-life.svg" />
            <span>Бытовая техника</span>
          </div>
          <div
            className={`categor ${category === "build" ? "selected" : ""}`}
            onClick={handleClickCategory("build")}
          >
            <img src="/icon-menu-build.svg" />
            <span>Строительство</span>
          </div>
          <div
            className={`categor ${category === "cloth" ? "selected" : ""}`}
            onClick={handleClickCategory("cloth")}
          >
            <img src="/icon-menu-cloth.svg" />
            <span>Одежда</span>
          </div>
          <div
            className={`categor ${category === "electro" ? "selected" : ""}`}
            onClick={handleClickCategory("electro")}
          >
            <img src="/icon-menu-electro.svg" />
            <span>Электроника</span>
          </div>
        </div>
        <div className="sale-banner" onClick={handleClickSale()}>
          <img src="/sale-banner.png" alt="sale-banner"></img>
        </div>
      </div>
      <div className="main-page">
        <div className="sort-select">
          <select id="sort" value={select} onChange={handleSelectSort}>
            <option value="cheap">Сначала дешевые</option>
            <option value="expensive">Сначала дорогие</option>
          </select>
        </div>
        <div className="products">
          {products.map(
            ({ id, title, price, imageUrl, sale, priceWithDiscount }) => {
              return (
                <div>
                  <ProductCard
                    key={id}
                    id={id}
                    title={title}
                    imageUrl={imageUrl}
                    price={price}
                    sale={sale}
                    priceWithDiscount={priceWithDiscount}
                  />
                </div>
              );
            }
          )}
        </div>
        <div className="pagination">
          <Pagination page={page} lastPage={lastPage} setPage={setPage} />
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
    flex-direction: column;
    width: 100%;
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

  .categor {
    display: flex;
    align-items: center;

    &.selected {
      background-color: #004d99;
      color: #fff;
    }

    &:hover {
      cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
    }
  }

  .products {
    display: flex;
    flex-wrap: wrap;
  }

  .sort-select {
    display: flex;
  }
  select {
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

    &:hover {
      cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
    }
  }

  .pagination {
    margin: 20px auto;
  }

  h1 {
    text-align: center;
  }
`;
