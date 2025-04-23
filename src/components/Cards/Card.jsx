import './card.css'

function Card({ product, addToCart }) {
    const { name, tag, price, imageSrc, available } = product;
    if (!available) return null;
    return (
        <div className="card" >
            <img src={imageSrc} alt={`Illustration ${name}`} />
            <div className='card-content'>
                <h2>{name}</h2>
                <p className="card-tag">{tag}</p>
                <p>{price}€</p>
                <p>{available ? "Disponible" : "En rupture"}</p>
                <button className="card-btn" onClick={() => addToCart(product)}>Ajouter</button>
            </div>
        </div >
    );
}

export default Card;