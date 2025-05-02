import './header.css';
import Search from '../Search/Search';

function Header({ toggleCart, cart, onSearchChange }) {
    return (
        <header className="header">
            <div className="logo">
                <img src="/img/logo.png" alt="Lego Brick logo" /><h1>Vente de Lego</h1>
            </div>
            <div className='header-right'>
                <Search onSearchChange={onSearchChange} />
                <button className="shoppingCart" onClick={toggleCart} data-count={cart.reduce((acc, p) => acc + p.quantity, 0)}><img src="/img/shopping-cart.png" alt="Shopping cart icon" /></button>
            </div>
        </header >
    );
}

export default Header;