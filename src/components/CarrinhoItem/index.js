import { useState, useEffect,useContext } from 'react';
import { CartContext } from '../../contexts/cartContext'
import { Link } from 'react-router-dom';
import './style.scss';

export const CarrinhoItem = ({product}) => {
  const [multiplier, setMultiplier] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const { products, deleteProduct } = useContext(CartContext);

  const handleQtdChange = (e) => {
    setMultiplier(e.target.value);
    product.quantidade = e.target.value;
    console.log(product);
  };

  useEffect(() => {
    setTotalPrice(product.price * multiplier);
    product.total = product.price * multiplier;
  },[multiplier, product, products]);

  return (
    <article key={product.id}>
      <div className='product-container'>
        <img src={product.image} alt='imagem do produto' />
        <div>
          <h3>{product.title}</h3>
          <small>Categoria:</small>
          <p as={Link} to={`/products/categories/${product.category}`}>{product.category}</p>
          <Link to={`/products/${product.id}`}>Ver produto</Link>
          <p as={Link} to={"/carrinho"} onClick={() => deleteProduct(product)}>Excluir do carrinho</p>
        </div>
      </div>
      <div className='product-price'>
        <label htmlFor={`qtd-${product.title}`}>Qtd:</label>
        <input
          type='number'
          id={`qtd-${product.title}`}
          name={`qtd-${product.title}`}
          min='1'
          max='99'
          // value={quantidade}
          onChange={handleQtdChange}
          required
        />
        <h4>
          <small>R$</small>{totalPrice.toFixed(2)}
        </h4>
      </div>
    </article>
  );
};
