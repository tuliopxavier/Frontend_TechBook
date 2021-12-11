import api from '../../services/api';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './style.scss';

export const TodosProdutos = () => {
  const [products, setProducts] = useState([]);
  const [categoryNames, setCategoryNames] = useState([]);
  const { category } = useParams();

  const getProducts = async () => {
    try {
      const response = await api.get('/products');
      setProducts(response.data);
    } catch (error) {
      console.log('Erro produtos');
    }
  };

  const getCategoryNames = async () => {
    try {
      const response = await api.get(`/products/categories`);
      setCategoryNames(response.data);
    } catch (error) {
      console.log('Erro Categoria');
    }
  };

  useEffect(() => {
    getProducts();
    getCategoryNames();
  }, [category]);

  return (
    <>
    <Helmet>
      <title>Techbook | Produtos</title>
    </Helmet>
      <div id='produtos-container'>
        <section id='menu-container'>
          <h3>Categorias: </h3>
          <ul>
            <Link to={'/products'}>
              <li> Todos </li>
            </Link>

            {categoryNames.length !== 0 &&
              categoryNames.map(({ id, name, longName }) => {
                return (
                  <Link key={id} to={`/products/categories/${name}`}>
                    <li> {longName} </li>
                  </Link>
                );
              })}
          </ul>
        </section>

        <section id='list-container'>
          {products.map(({ id, title, image }) => {
            return (
              <article key={id}>
                <Link to={`/products/${id}`}>
                  <img src={image} alt='imagem do produto' />
                  <div className='product-container'>
                    <h3>{title}</h3>
                  </div>
                </Link>
              </article>
            );
          })}
        </section>
      </div>
    </>
  );
};
