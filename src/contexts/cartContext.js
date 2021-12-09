import { createContext, useReducer, useEffect } from 'react';
import { cartReducer } from '../reducers/CartReducer';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [products, dispatch] = useReducer(cartReducer, [], () => {
    const localData = localStorage.getItem('products');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const addProduct = (product) => dispatch({ type: 'ADD_PRODUCT', payload: product });

  return (
    <CartContext.Provider value={{ products, addProduct }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;