import api from '../../services/api'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Cards } from '../../components/Cards/index'
import './style.scss';


export const TodosProdutos = () => {
    const [products, setProducts] = useState([])

    const getProducts = async (quantidade) => {
        try {
            const response = await api.get('/products');
            setProducts(response.data.slice(0, quantidade))
        } catch (error) {
            console.log("Erro")
        }
        
       

    }
    useEffect(() => {
        getProducts()
    }, [])

    console.log(products)
    return(
       <> 
        <div id='produtos-container'>
        <section>
          {products.map(
              ({ id, title, price, description, category, image }) => {
                  return (
                  <Link to={`/products/${id}`}>
                <article key={id}>
                  <img src={image} alt='imagem do produto' />
                  <div className='product-container'>
                    <h3>{title}</h3>
                    {/* <small>{category}</small> */}
                  </div>
                </article>
              </Link>
              );
            }
          )}
      </section>
    </div>
    </>
    )
    
}
