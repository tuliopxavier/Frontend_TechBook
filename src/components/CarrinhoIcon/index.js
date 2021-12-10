import { useState, useEffect, useContext } from 'react';
import carrinho from './carrinho.svg';
import { CartContext } from '../../contexts/cartContext'
import './style.scss';

export const CarrinhoIcon = () => {
    const [productsList, setProductList] = useState([]);
    const { products } = useContext(CartContext);

    async function getProducts(products) {
        setProductList(products);
      }
    
    useEffect(() => {
    getProducts(products);
    }, [products]); 

    return (
        <div id="carrinho-icon">
            <img src={carrinho} alt="Carrinho de compras" />
            <p>{productsList.length}</p>
        </div>
    )
}
