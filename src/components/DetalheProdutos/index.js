import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import { CartContext } from '../../contexts/cartContext';
import { Helmet } from 'react-helmet';
import './style.scss';

export const Detail = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const { addProduct } = useContext(CartContext);

  const getProduct = async (id) => {
    try {
      const response = await api.get(`/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProduct(id);
  }, [id]);
  
  const handleClick = async () => {
    product.quantidade = 1;
    product.total = product.price * product.quantidade;
    addProduct(product);
  };
  
  return (
    <>
    <Helmet>
        <title>Techbook | {`${product.title}`} </title>
      </Helmet>
    <div id='produto-container'>
      <section>
        {/* div imagem do produto */}
        <div id='foto-produto'>
          <img src={product.image} alt='Imagem do produto' />
        </div>

        {/* div detalhes do produto */}
        <div id='detalhes-produto'>
          <h3>{product.title}</h3>
          <h4>
            <small>R$</small> {product.price}
          </h4>
          <small>{product.category}</small>
          <p>{product.description}</p>

          <div className='product-price'>
            <button id='add-carrinho' onClick={handleClick}>
              Adicionar no carrinho
            </button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};
