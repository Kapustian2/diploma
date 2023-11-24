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
    .max(25, "Максимум 25 символа"),
  price: yup
    .number()
    .required("Заполните цену")
    .min(100, "Минимальная цена 100"),
  category: yup.string().required("Заполните категорию"),
  sale: yup
    .number()
    .min(10, "Минимум 10 процентов")
    .max(90, "Максимум 90 процентов"),
  imageUrl: yup.string().required("Укажите ссылку на фото"),
});

const AddBlockContainer = ({ className }) => {
  const [select, setSelect] = useState("");
  const [priceWithDiscount, setPriceWithDiscount] = useState(0);

  const [serverError, setServerError] = useState(null);
  const [isSale, setIsSale] = useState(false);
  const dispatch = useDispatch();

  const handleSaleCheckbox = () => {
    setIsSale(!isSale);
  };

  const handleSelect = (event) => {
    setSelect(event.target.value);
  };

  const onSubmit = ({ title, price, category, sale, imageUrl }) => {
    const calculatedPriceWithDiscount = isSale
      ? (price * (100 - sale)) / 100
      : price;

    setPriceWithDiscount(calculatedPriceWithDiscount);

    request("/products", "POST", {
      title,
      price,
      category,
      sale,
      priceWithDiscount: calculatedPriceWithDiscount,
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
      sale: 0,
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
          <CheckBox checked={isSale} onChange={handleSaleCheckbox} />
        </div>
        <FormField
          type="number"
          placeholder="Скидка"
          disabled={!isSale}
          {...register("sale", {
            onChange: () => setServerError(null),
          })}
          errorMessage={errors?.sale?.message}
          className="form-field"
        />
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
    gap: 20px;

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
