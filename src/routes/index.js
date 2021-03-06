import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Header from '../components/Header';
import Sobre from '../components/SobreNos'
import Footer from '../components/Footer';
import CarrinhoPage from '../pages/CarrinhoPage';
import DetailPage from '../pages/Detail';
import Todos from '../pages/Todos';
import PorCategoria from '../pages/PorCategoria'
import CartContextProvider from '../contexts/cartContext';

const RouteList = () => (
  <>
    <BrowserRouter>
      <CartContextProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profiles' element={<Sobre />} />
          <Route path='/carrinho' element={<CarrinhoPage />} />
          <Route path='/products/:id' element={<DetailPage />} />
          <Route path='/products' element={<Todos />} />
          <Route path="/products/categories/:category" element={<PorCategoria />} />
        </Routes>
        <Footer />
      </CartContextProvider>
    </BrowserRouter>
  </>
);

export default RouteList;
