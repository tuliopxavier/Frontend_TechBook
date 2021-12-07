/* eslint-disable jsx-a11y/anchor-is-valid */
import { Logo } from '../Logo';
import { Carrinho } from '../Carrinho';
import './style.scss';

export const Header = () => {
    return (
        <header>
            <Logo/>

            <div>
                <input type="search" />
                <span id="icon-search">
                    <img src="./search.png"/>
                </span>
            </div>

            
            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Produtos</a></li>
                    <li><a href="">Sobre Nós</a></li>
                    <Carrinho/>     
                </ul>
            </nav>
        </header>
    )
}
