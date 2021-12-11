import api from '../../services/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './style.scss';

export const PorCategoria = () => {
  const [categories, setCategories] = useState([]);
  const [categoriesNames, setCategoriesNames] = useState([]);
  const { category } = useParams();

  const getCategory = async (category) => {
    try {
      const response = await api.get(`/products/categories/${category}`);
      setCategories(response.data);
    } catch (error) {
      console.log('Erro Categoria');
    }
  };

  const getCategoriesNames = async () => {
    try {
      const response = await api.get(`/products/categories`);
      setCategoriesNames(response.data);
      console.log(response.data);
    } catch (error) {
      console.log('Erro Categoria');
    }
  };

  useEffect(() => {
    getCategoriesNames();
    getCategory(category);
  }, [category]);

  return (
    <>
      <Helmet>
        <title>Techbook | {category}</title>
      </Helmet>
      <div id='produtos-container'>
        <section id='menu-container'>
          <h3>Categorias: </h3>
          <ul>
            <Link to={'/products'}>
              <li> Todos </li>
            </Link>
            {categoriesNames.length !== 0 &&
              categoriesNames.map(({ id, name, longName }) => {
                return (
                  <Link to={`/products/categories/${name}`}>
                    <li key={id}> {longName} </li>
                  </Link>
                );
              })}
          </ul>
        </section>

        <section>
          {categories.map(({ id, title, image }) => {
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
