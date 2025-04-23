import './card.css'

function Card({ src, name, tag, price, available }) {
    const addToBasket = () =>
        alert(`Le produit ${name} a été ajouté au panier !`);

    if (!available) return null;
    return (
        <div className="card" >
            <img src={src} alt={`Illustration ${name}`} />
            <div className='card-content'>
                <h2>{name}</h2>
                <p className="card-tag">{tag}</p>
                <p>{price}€</p>
                <p>{available ? "Disponible" : "En rupture"}</p>
                <a className="card-btn" href="#" onClick={addToBasket}>Ajouter</a>
            </div>
        </div >
    );
}

export default Card;