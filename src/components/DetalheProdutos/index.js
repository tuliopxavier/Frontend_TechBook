import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import './style.scss';
<<<<<<< HEAD
import { CartContext } from '../../contexts/cartContext';
=======
import { CartContext } from '../../Context/CartContext';
>>>>>>> 9f34f828ec4da7d21a5463623255896eb85d9507

export const Detail = () => {
  const [productDetail, setProductDetail] = useState({});
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const { addProduct } = useContext(CartContext);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await api.get(`/products/${id}`);
        setProductDetail(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getProduct();
  }, [id]);

<<<<<<< HEAD
  const handleClick = async () => {
      const response = await api.get(`/products/${id}`);
      setProduct(response.data);
  };
=======
  const handleClick = async ({ id }) => {
    try{

    } catch (error) {

    }
  }
>>>>>>> 9f34f828ec4da7d21a5463623255896eb85d9507

  useEffect(() => {
    console.log(product);
  },[product])
  
  

  return (
    <div id='produto-container'>
      <section>
        {/* div imagem do produto */}
        <div id='foto-produto'>
          <img src={productDetail.image} alt='Imagem do produto' />
        </div>

        {/* div detalhes do produto */}
        <div id='detalhes-produto'>
          <h3>{productDetail.title}</h3>
          <h4>
            <small>R$</small> {productDetail.price}
          </h4>
          <small>{productDetail.category}</small>
          <p>{productDetail.description}</p>

          <div className='product-price'>
            <label htmlFor={`qtd-${productDetail.title}`}>Qtd:</label>
            <input
              type='number'
              id={`${productDetail.id}`}
              name={`qtd-${productDetail.title}`}
              placeholder='1'
              min='1'
              max='99'
              onChange={(e) => {console.log(e.target.value)}}
            />
            <button id='add-carrinho' onClick={handleClick}>
              Comprar
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
