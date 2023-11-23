import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Header } from "./components";
import {
  AdminPanel,
  Login,
  Main,
  Product,
  Register,
  UserProfile,
} from "./Pages";

const AppColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
  background-color: F7F8F9;
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
          <Route path="/adminpanel" element={<AdminPanel />} />
          <Route path="/products" element={<Product />} />
          <Route path="/product" element={<div>Новый товар</div>} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/profile/:userId" element={<UserProfile />} />
          <Route path="*" element={<div>Страница 404</div>} />
        </Routes>
        <Footer />
      </AppColumn>
    </>
  );
}

export default App;
