import logoIcon from "./logoTechBook.svg";
import './style.scss';

export const Logo = () => {
    return (
        <div id="logo-icon">
            <h3>Tech</h3>
            <img src={logoIcon} alt="logo icon" />
            <h3>ook</h3>
        </div>
    )
}
