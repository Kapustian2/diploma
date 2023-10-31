import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Header } from "./components";
import { Main } from "./Pages";

const AppColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1000px;
  min-height: 100%;
`;

const Content = styled.div`
  text-align: center;
`;

const Footer = () => <div>Footer</div>;

function App() {
  return (
    <>
      <AppColumn>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<div>Cтраница логина</div>} />
          <Route path="/register" element={<div>Cтраница регистрации</div>} />
          <Route path="/cart" element={<div>Корзина</div>} />
          <Route path="/products" element={<div>Страница товаров</div>} />
          <Route path="/product" element={<div>Новый товар</div>} />
          <Route
            path="/product/:productId"
            element={<div>Страница товара</div>}
          />
          <Route path="*" element={<div>Страница 404</div>} />
        </Routes>
        <Footer />
      </AppColumn>
    </>
  );
}

export default App;
