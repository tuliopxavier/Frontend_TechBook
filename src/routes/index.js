import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Header from '../components/Header';
import Sobre from '../components/SobreNos'
import Footer from '../components/Footer';
import CarrinhoPage from '../pages/CarrinhoPage';
import DetailPage from '../pages/Detail';
import CartContextProvider from '../contexts/cartContext';

const RouteList = () => (
  <>
    <BrowserRouter>
      <CartContextProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/carrinho' element={<CarrinhoPage />} />
          <Route path='/products/:id' element={<DetailPage />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
        <Footer />
      </CartContextProvider>
    </BrowserRouter>
  </>
);

export default RouteList;
