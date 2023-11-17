import { useState } from "react";
import { Button, CheckBox, Input } from "../../../components";
import styled from "styled-components";

const AddBlockContainer = ({ className }) => {
  const [select, setSelect] = useState("");

  const handleSelectSort = (event) => {
    setSelect(event.target.value);
  };

  return (
    <div className={className}>
      <h2>Добавить товар</h2>
      <div className="product-data">
        <Input width="328px" height="48px" placeholder="Название..."></Input>
        <select id="sort" value={select} onChange={handleSelectSort}>
          <option value="option1">Книги</option>
          <option value="option2">Бытовые товары</option>
          <option value="option3">Строительство</option>
          <option value="option4">Одежда</option>
          <option value="option5">Электроника</option>
        </select>
        <Input width="328px" height="48px" placeholder="Цена..."></Input>

        <div className="sale">
          Скидка
          <CheckBox />
        </div>
        <Input
          width="328px"
          height="48px"
          placeholder="Ссылка на фотографию..."
        ></Input>
      </div>
      <Button
        width="539px"
        height="77px"
        background="#F91155"
        borderRadius="20px"
      >
        Добавить
      </Button>
    </div>
  );
};

export const AddBlock = styled(AddBlockContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 587px;
  height: 869px;
  border-radius: 40px;
  background: #005bff;
  margin-left: 60px;

  h2 {
    color: #fff;
    font-family: Inter;
    font-size: 36px;
    margin-bottom: 60px;
  }

  .product-data {
    display: grid;
    height: 400px;
    gap: 40px;

    select {
      width: 328px;
      height: 48px;
      border-radius: 4px;
    }
  }
  Button {
    margin-top: 220px;
  }

  .sale {
    display: flex;
    justify-content: space-between;
    font-family: Inter;
    font-size: 16px;
    align-items: center;
    width: 328px;
    height: 48px;
    border-radius: 4px;
    background: white;
    padding: 0 10px;
  }
`;
