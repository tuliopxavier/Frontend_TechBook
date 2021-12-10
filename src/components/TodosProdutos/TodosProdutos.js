import api from '../../services/api'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './style.scss';


export const TodosProdutos = () => {
    const [products, setProducts] = useState([])


    const getProducts = async (quantidade) => {
          try {
              const response = await api.get('/products');
              setProducts(response.data.slice(0, quantidade))
          } catch (error) {
              console.log("Erro produtos")
          }
    }
    
    useEffect(() => {
        getProducts()
    }, [])

  

    return(
       <> 
        <div id='produtos-container'>
        <section>
          <div id="menu-container">
            <h3>Categorias: </h3>
            {category.map(
              ({id, category}) =>{
                return(
                  <h4 key={category}> {category} </h4>
                )
              }
            )}
            
     
          </div>
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
