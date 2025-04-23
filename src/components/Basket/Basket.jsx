import './basket.css'

function Basket({ products, total }) {
    return (
        <div className="basket">
            <h2>Panier</h2>
            {products.length === 0 ? <p>Votre panier est vide pour le moment</p> :
                <>
                    <ul>
                        {products.map((product, index) => <li key={index}>{product.name}</li>)}
                    </ul>
                </>
            }
            <p className='basket-total'>Total de votre panier : {total.toFixed(2)}€</p>
        </div>
    )
}

export default Basket;