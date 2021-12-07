import carrinho from './carrinho.svg';
import './style.scss';

export const CarrinhoIcon = () => {
    const carrinhoLength = 2;

    return (
        <div id="carrinho-icon">
            <img src={carrinho} alt="Carrinho de compras" />
            <p>{carrinhoLength}</p>
        </div>
    )
}
