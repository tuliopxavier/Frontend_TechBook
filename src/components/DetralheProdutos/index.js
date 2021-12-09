import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import './style.scss';

export const Detail = () => {
  const [productDetail, setProductDetail] = useState({});
  const {id} = useParams();

  useEffect(() => {
  const getProduct = async() => {
    try {
      const response = await api.get(`/products/${id}`); 
    // colocar rota `/products/${id}`
      setProductDetail(response.data);
    } catch (error) {
      console.error(error);
    }
    }
    getProduct();
}, [id]);

  return (
    
    <div id='produto-container'>   

            <section>

                        {/* div imagem do produto */}
                    <div id='foto-produto'>
                        <img src={productDetail.image} alt="Imagem do produto" />
                    </div>

                        {/* div detalhes do produto */}
                    <div id='detalhes-produto'>

                        <h3>{productDetail.title}</h3>
                        <h4><small>R$</small> {productDetail.price}</h4>
                        <small>{productDetail.category}</small>
                        <p>{productDetail.description}</p>
                        
                        <div className='product-price'>
                            <label htmlFor={`qtd-${productDetail.title}`}>Qtd:</label>
                            <input type='number' id={`qtd-${productDetail.title}`} name={`qtd-${productDetail.title}`} placeholder='1' min='1' max='99' />
                            <button id='add-carrinho'>Adicionar ao carrinho</button>
                        </div>                  
                    
                    </div>
            </section>
    </div>
    
  );
};