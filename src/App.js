import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Header } from "./components";
import { Login, Main, Register, UserProfile } from "./Pages";

const AppColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
`;

const Footer = () => <div>Footer</div>;

function App() {
  return (
    <>
      <AppColumn>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<div>Корзина</div>} />
          <Route path="/products" element={<div>Страница товаров</div>} />
          <Route path="/product" element={<div>Новый товар</div>} />
          <Route
            path="/product/:productId"
            element={<div>Страница товара</div>}
          />
          <Route path="/profile/:userId" element={<UserProfile />} />
          <Route path="*" element={<div>Страница 404</div>} />
        </Routes>
        <Footer />
      </AppColumn>
    </>
  );
}

export default App;
