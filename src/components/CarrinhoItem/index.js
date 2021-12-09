import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export const CarrinhoItem = ({ id, title, price, category, image }) => {
  const [multiplier, setMultiplier] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleQtdChange = (e) => {
    setMultiplier(e.target.value);
  };

  useEffect(() => {
    setTotalPrice(price * multiplier);
  },[multiplier, price]);

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
          <small>R$</small>{totalPrice.toFixed(2)}
        </h4>
      </div>
    </article>
  );
};
