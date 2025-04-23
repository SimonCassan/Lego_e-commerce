import './header.css';

function Header({ toggleCart }) {
    return (
        <header className="header">
            <div className="logo">
                <img src="../../public/img/logo.png" alt="Lego Brick logo" /><h1>Vente de Lego</h1>
            </div>
            <button className="shoppingCart" onClick={toggleCart}><img src="../../public/img/shopping-cart.png" alt="Shopping cart icon" /></button>
        </header>
    );
}

export default Header;