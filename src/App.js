import { Route, Routes } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';

const Content = styled.div`
	text-align: center;
`;

const Header = () => <div>Header</div>;
const Footer = () => <div>Footer</div>;

function App() {
	return (
		<>
			<Header />
			<Content>App</Content>
			<Routes>
				<Route path="/" element={<div>Главная страница</div>} />
				<Route path="/login" element={<div>Cтраница логина</div>} />
				<Route path="/register" element={<div>Cтраница регистрации</div>} />
				<Route path="/basket" element={<div>Корзина</div>} />
				<Route path="/products" element={<div>Страница товаров</div>} />
				<Route path="/product" element={<div>Новый товар</div>} />
				<Route path="/product/:productId" element={<div>Страница товара</div>} />
				<Route path="*" element={<div>Страница 404</div>} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
