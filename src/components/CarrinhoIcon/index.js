import { useState, useEffect } from 'react';
import api from '../../services/api';
import carrinho from './carrinho.svg';
import './style.scss';

export const CarrinhoIcon = () => {
    const [productsList, setProductList] = useState([]);

    async function getProducts(quantidade) {
        try {
          const response = await api.get('/products');
          setProductList(response.data.slice(0, quantidade));
        } catch (error) {
          console.error(error);
        }
    }

    useEffect(() => {
        getProducts(20);
    },[]);

    return (
        <div id="carrinho-icon">
            <img src={carrinho} alt="Carrinho de compras" />
            <p>{productsList.length}</p>
        </div>
    )
}
