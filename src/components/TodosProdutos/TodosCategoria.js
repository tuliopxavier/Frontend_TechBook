import api from '../../services/api'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './style.scss';


export const Categoria = () => {
    const [products, setProducts] = useState()

    const getProducts = async () => {
        const response = await api.get('/products/categories')
        setProducts(response.data)

    }
    useEffect(() => {
        getProducts()
    }, [])

    console.log(products)
    return(

        <select>
            {
            products?.map(
                ({ id, name }) => {
                    return (
                        
                        <Link to={`/products/categories/${name}`}><option key={id}>{name}</option></Link>
                    ) 
                            

                }
            )
            }
        </select>
    )
    
}
