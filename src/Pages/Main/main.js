import styled from "styled-components";

const MainContainer = ({ className }) => {
  return (
    <div className={className}>
      <div className="category">
        <h1>Категории</h1>
        <p>Книги</p>
        <p>Бытовая техника</p>
        <p>Строительство</p>
        <p>Одежда</p>
        <p>Электроника</p>
      </div>
    </div>
  );
};

export const Main = styled(MainContainer)`
  text-align: center;
  margin-top: 110px;

  .category {
    text-align: left;
    width: 343px;
    height: 970px;
    flex-shrink: 0;
    border-radius: 0px 20px 20px 0px;
    background: #f91155;
    color: #fff;

    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
