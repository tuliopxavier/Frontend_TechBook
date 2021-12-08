import { useState, useEffect } from 'react';
import api from '../../services/api';
import './style.scss';

export const Carrinho = () => {
  const [productsList, setProductList] = useState([]);

  async function getProducts(quantidade) {
    try {
      const response = await api.get('/products');
      setProductList(response.data.slice(0, quantidade));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProducts(20);
  }, []);

  return (
    <div id='carrinho-container'>
      <section>

        {productsList.map(
          ({ id, title, price, description, category, image }) => {
            return (
              <article key={id}>
                <img src={image} alt='imagem do produto' />
                <div className='product-container'>
                  <h3>{title}</h3>
                  <small>{category}</small>
                  <p>{description}</p>
                </div>
                <div className='product-price'>
                  <label htmlFor={`qtd-${title}`}>Qtd:</label>
                  <input type='number' id={`qtd-${title}`} name={`qtd-${title}`} placeholder='1' min='1' max='99' />
                  <h4><small>R$</small> {price.toFixed(2)}</h4>
                </div>
              </article>
            );
          }
        )}

        <div id='total-cart'></div>
        
      </section>
    </div>
  );
};
