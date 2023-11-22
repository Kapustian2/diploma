import { useState } from "react";
import { Button, CheckBox, FormField, Input } from "../../../components";
import styled from "styled-components";
import { request } from "../../../utils";
import { setProduct } from "../../../actions";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const productFormSchema = yup.object().shape({
  title: yup
    .string()
    .required("Заполните название")
    .min(3, "Минимум 5 символа")
    .max(15, "Максимум 15 символа"),
  price: yup
    .number()
    .required("Заполните цену")
    .min(100, "Минимальная цена 100"),
  category: yup.string().required("Заполните категорию"),
  sale: yup.boolean(),
  imageUrl: yup.string().required("Укажите ссылку на фото"),
});

const AddBlockContainer = ({ className }) => {
  const [select, setSelect] = useState("");
  const [serverError, setServerError] = useState(null);
  const dispatch = useDispatch();

  const handleSelect = (event) => {
    setSelect(event.target.value);
  };

  const onSubmit = ({ title, price, category, sale, imageUrl }) => {
    request("/products", "POST", {
      title,
      price,
      category,
      sale,
      imageUrl,
    }).then(({ error, product }) => {
      if (error) {
        setServerError(`Ошибка запроса: ${error}`);
        return;
      }

      dispatch(setProduct(product));
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      price: 0,
      sale: false,
    },
    resolver: yupResolver(productFormSchema),
  });
  return (
    <div className={className}>
      <h2>Добавить товар</h2>
      <form className="product-data" onSubmit={handleSubmit(onSubmit)}>
        <FormField
          type="text"
          placeholder="Название"
          {...register("title", {
            onChange: () => setServerError(null),
          })}
          errorMessage={errors?.title?.message}
          className="form-field"
        />
        <FormField
          type="text"
          placeholder="Ссылка на фото"
          {...register("imageUrl", {
            onChange: () => setServerError(null),
          })}
          errorMessage={errors?.imageUrl?.message}
          className="form-field"
        />
        <select
          id="sort"
          value={select}
          {...register("category", {
            onChange: () => setServerError(null),
          })}
          onChange={handleSelect}
        >
          <option value="book">Книги</option>
          <option value="bbit">Бытовые товары</option>
          <option value="build">Строительство</option>
          <option value="cloth">Одежда</option>
          <option value="electro">Электроника</option>
        </select>
        <FormField
          type="number"
          placeholder="Цена"
          {...register("price", {
            onChange: () => setServerError(null),
          })}
          errorMessage={errors?.price?.message}
          className="form-field"
        />

        <div className="sale">
          Товар со скидкой
          <CheckBox />
        </div>
        <Button
          type="submit"
          width="539px"
          height="77px"
          background="#F91155"
          borderRadius="20px"
        >
          Добавить
        </Button>
      </form>
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
    justify-items: center;
    height: 400px;
    gap: 24px;

    select {
      width: 328px;
      height: 48px;
      border-radius: 4px;
      margin-bottom: 16px;
    }
  }
  Button {
    margin-top: 150px;
  }

  .sale {
    display: flex;
    justify-content: space-between;
    font-family: Inter;
    font-size: 16px;
    color: #fff;
    align-items: center;
    width: 328px;
    border-radius: 4px;
    padding: 0 10px;
  }

  .form-field {
    width: 328px;
  }
`;
