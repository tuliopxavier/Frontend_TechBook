import api from '../../services/api'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Field } from 'formik';
import './style.scss';


export const TodosProdutos = () => {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([]);
    const [categoriesNames, setCategoriesNames] = useState([]);
    const {category} = useParams();

    const getProducts = async (quantidade) => {
          try {
              const response = await api.get('/products');
              setProducts(response.data.slice(0, quantidade))
          } catch (error) {
              console.log("Erro produtos")
          }
    }
    const getCategory = async (category) => {      
      try {
              const response = await api.get(`/products/categories/${category}`);
              setCategories(response.data)
            } catch (error) {
              console.log("Erro Categoria")
          }
        }

    const getCategoriesNames = async () => {
      console.log("helooo")  
      try {
          const response = await api.get(`/products/categories`);
              setCategoriesNames(response.data)
              console.log(response.data)
        } catch (error) {
          console.log("Erro Categoria")
        }
      }
    
    useEffect(() => {
        getProducts()
        getCategoriesNames()
        getCategory(category)
    }, [category])

    return(
       <> 
        <div id='produtos-container'>
          
          <section id="menu-container">
          <h3>Categorias: </h3>
            <ul>
              <Link to={'/products'}><li> Todos </li></Link>

             {categoriesNames.length !== 0 && (
               categoriesNames.map( ({id, name,longName}) => {
                  return(
                    <Link to={`/products/categories/${name}`}> 
                    <li key={id} > {longName}   </li>
                    </Link> 
                  )
               })
             )}          
            </ul>               
          </section>  
        
          <section id="list-container">
          {products.map(
              ({ id, title, image }) => {
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
            }
          )}
      </section>
    </div>
    </>
    )    
}
