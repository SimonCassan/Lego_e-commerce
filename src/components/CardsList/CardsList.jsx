import "./cardslist.css";

import Card from "../Cards/Card";
import products from "../../data/products";

function CardsList({ addToBasket }) {
    return (
        <div className="cards-list">
            {products.map((product, index) =>
                <Card key={index} product={product} addToBasket={addToBasket} />
            )}
        </div>
    );
}

export default CardsList;