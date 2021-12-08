import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './style.scss';

export const Carrinho = () => {
  const [productsList, setProductList] = useState([]);
  const [multiplier, setMultiplier] = useState(0);

  async function getProducts(quantidade) {
    try {
      const response = await api.get('/products');
      setProductList(response.data.slice(0, quantidade));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProducts(5);
  }, []);  

  const handleClick = () => {
    console.log('click');
  };

  const handleQtdChange = (e) => {
    setMultiplier(e.target.value);
    console.log(multiplier);
  }

  return (
    <div id='carrinho-container'>
      <section>
        {productsList.length ? (
          productsList.map(({ id, title, price, category, image }) => {
              return (
                <article key={id}>
                  <div className='product-container'>
                    <img src={image} alt='imagem do produto' />
                    <div>
                      <h3>{title}</h3>
                      <small>Categoria:</small>
                      <p>{category}</p>
                      <Link to={`/products/${id}`}>Ver produto</Link>
                      <p>Excluir do carrinho</p>
                    </div>
                  </div>
                  <div className='product-price'>
                    <label htmlFor={`qtd-${title}`}>Qtd:</label>
                    <input
                      type='number'
                      id={`qtd-${title}`}
                      name={`qtd-${title}`}
                      placeholder='1'
                      min='1'
                      max='99'
                      onChange={handleQtdChange}
                    />
                    <h4>
                      <small>R$</small> {price.toFixed(2)}
                    </h4>
                  </div>
                </article>
              );
            }
          )
        ) : (
          <p id="loading">Carregando suas compras...</p>
        )}

        <div id='total-cart'>
          <h1>Total</h1>
          <button type="button" onClick={handleClick}>Continuar e pagar</button>
        </div>
      </section>
    </div>
  );
};
