import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CarrinhoPage from '../pages/CarrinhoPage';
import DetailPage from '../pages/Detail';

const RouteList = () => (
  <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/carrinho' element={<CarrinhoPage />} />
        <Route path='/products/:id' element={<DetailPage/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
);

export default RouteList;
