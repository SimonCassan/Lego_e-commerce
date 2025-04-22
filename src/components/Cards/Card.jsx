import './card.css'

function Card({ src, name, tag, price }) {
    return (
        <div className="card">
            <img src={src} alt={`Illustration ${name}`} />
            <div className='card-content'>
                <h2>{name}</h2>
                <p className="card-tag">{tag}</p>
                <p>{price}€</p>
                <a className="card-btn" href="#">Ajouter</a>
            </div>
        </div>
    );
}

export default Card;