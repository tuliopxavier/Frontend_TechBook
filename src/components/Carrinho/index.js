import { useState, useEffect, useContext } from 'react';
import { CarrinhoItem } from '../CarrinhoItem';
import { CartContext } from '../../contexts/cartContext'
import './style.scss';

export const Carrinho = () => {
  const [productsList, setProductList] = useState([]);
  const [total, setTotal] = useState(0);
  const { products } = useContext(CartContext);

  async function getProducts(products) {
    setProductList(products);
  };

  useEffect(() => {
    getProducts(products);
  }, [products]);  
  

  function sumProducts(products) {
    let subtotal = 0;
    products.forEach( product => {
      subtotal = subtotal + product.total;
    });
    setTotal(subtotal);
  };
  
  useEffect(() => {
    sumProducts(products);
  },[products]);
  
  const handleClick = () => {
    localStorage.clear();
    window.location.href = '/carrinho';
  };

  return (
    <div id='carrinho-container'>
      <section>
        
        {productsList.length ? (
          productsList.map((item) => {
              return (
                <CarrinhoItem key={item.id} product={item} />
              );
            })) : (<p id="loading">Carrinho vazio...</p>
        )}

        <div id='total-cart'>
          <h1><small>R$</small>{total.toFixed(2)}</h1>
          <button type="button" onClick={handleClick}>Finalizar</button>
        </div>
      </section>
    </div>
  );
};
