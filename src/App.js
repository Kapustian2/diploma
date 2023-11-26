import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Header } from "./components";
import {
  AdminPanel,
  Cart,
  Login,
  Main,
  Product,
  Register,
  UserProfile,
} from "./Pages";
import { SearchProvider } from "./hooks/seacrh-provider";

const AppColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function App() {
  return (
    <>
      <SearchProvider>
        <AppColumn>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart/:userId" element={<Cart />} />
            <Route path="/adminpanel" element={<AdminPanel />} />
            <Route path="/products" element={<Product />} />
            <Route path="/product" element={<div>Новый товар</div>} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/profile/:userId" element={<UserProfile />} />
            <Route path="*" element={<div>Страница 404</div>} />
          </Routes>
        </AppColumn>
      </SearchProvider>
    </>
  );
}

export default App;
