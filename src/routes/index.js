import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CarrinhoPage from '../pages/CarrinhoPage';

const RouteList = () => (
  <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/carrinho' element={<CarrinhoPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
);

export default RouteList;
