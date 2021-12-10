/* eslint-disable jsx-a11y/anchor-is-valid */
import { Logo } from '../Logo';
import { CarrinhoIcon } from '../CarrinhoIcon';
import { Link } from 'react-router-dom';
import './style.scss';

const Header = () => {
    return (
        <header>

            <Link to='/'><Logo/></Link>
            
            <div id="search">
                <input type="search" />
                <span id="icon-search">
                    <img src="./search.png" alt="campo de busca"/>
                </span>
            </div>

            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><a href="/products">Produtos</a></li>
                    <li><Link to='/profiles'>Sobre Nós</Link></li>
                    <Link to='/carrinho'>
                        <CarrinhoIcon/>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header;