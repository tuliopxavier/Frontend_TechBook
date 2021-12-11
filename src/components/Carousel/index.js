import { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './style.scss';

export const CarouselCards = () => {
  const [productsList, setProductList] = useState([]);

  let intProd = 6;

  async function getProducts(quantidade) {
    try {
      const response = await api.get('/products');
      setProductList(response.data.slice(quantidade));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProducts(intProd);

  },[intProd]);

  return (

    <section id='carousel-container'>
      <Carousel>
        <Carousel.Item interval={5000}>

          {productsList.length
            ? productsList.slice(0, 3).map(({ id, image, category }) => {
                return (
                  <div key={id}>
                    <Link to={`/products/${id}`}>
                      <img src={image} alt='imagem do livro' />
                    </Link>
                    {/* <p>{category}</p> */}
                  </div>
                );
              })
            : ''}
            
        </Carousel.Item>

        <Carousel.Item interval={5000}>

          {productsList.length
            ? productsList.slice(3, 6).map(({ id, image, category }) => {
                return (
                  <div key={id}>
                    <Link to={`/products/${id}`}>
                      <img src={image} alt='imagem do livro' />
                    </Link>
                    {/* <p>{category}</p> */}
                  </div>
                );
              })
            : ''}

        </Carousel.Item>
      </Carousel>
    </section>
  );
};
