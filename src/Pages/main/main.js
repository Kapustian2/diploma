import { styled, withTheme } from "styled-components";
import { theme } from "../../Theme";

const MainContainer = ({ className }) => {
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
      </div>
    </div>
  );
};

export const Main = styled(withTheme(MainContainer))`
  text-align: center;
  margin-top: 110px;

  .categories {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 30px;
  }

  .category {
    width: 343px;
    height: 461px;
    border-radius: 0px 20px 20px 0px;
    background: #f91155;
    color: #fff;
    margin-top: -360px;

    font-family: Inter;
    font-size: 24px;
  }

  img {
    margin-right: 30px;
  }
  h1 {
    text-align: center;
  }
`;
