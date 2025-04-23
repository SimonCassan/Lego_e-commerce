import "./cardslist.css";

import Card from "../Cards/Card";
import products from "../../data/products";

function CardsList({ addToCart }) {
    return (
        <div className="cards-list">
            {products.map((product) =>
                <Card key={product.id} product={product} addToCart={addToCart} />
            )}
        </div>
    );
}

export default CardsList;