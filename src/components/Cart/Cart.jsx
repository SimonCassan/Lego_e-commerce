import './cart.css'

function Cart({ products, total }) {
    return (
        <div className="cart">
            <h2>Panier</h2>
            {products.length === 0 ? <p>Votre panier est vide pour le moment</p> :
                <>
                    <ul>
                        {products.map((product, index) => <li key={index}>{product.name} : {product.price}€</li>)}
                    </ul>
                </>
            }
            <p className='cart-total'>Total de votre panier : {total.toFixed(2)}€</p>
        </div>
    )
}

export default Cart;