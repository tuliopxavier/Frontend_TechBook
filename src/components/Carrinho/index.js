import { useState, useEffect } from 'react';
import { CarrinhoItem } from '../CarrinhoItem';
import api from '../../services/api';
import './style.scss';

export const Carrinho = () => {
  const [productsList, setProductList] = useState([]);
  const [productsTotal, setProductTotal] = useState(0);

  async function getProducts(quantidade) {
    try {
      const response = await api.get('/products');
      setProductList(response.data.slice(0, quantidade));
    } catch (error) {
      console.error(error);
    }
  }

  function sumProducts() {
    let acc = 0;
    productsList.forEach( product => {
      acc = acc + product.price;
      setProductTotal(acc);
    })
  }

  useEffect(() => {
    getProducts(5);
  }, []);  
  
  useEffect(() => {
    sumProducts();
  });
  
  const handleClick = () => {
    console.log('click');
  };

  return (
    <div id='carrinho-container'>
      <section>
        
        {productsList.length ? (
          productsList.map(({ id, title, price, category, image }) => {
              return (
                <CarrinhoItem key={id} id={id} title={title} price={price} category={category} image={image}/>
              );
            })) : (<p id="loading">Carregando suas compras...</p>
        )}

        <div id='total-cart'>
          <h1><small>R$</small>{productsTotal}</h1>
          <button type="button" onClick={handleClick}>Continuar e pagar</button>
        </div>
      </section>
    </div>
  );
};
