import "./cardslist.css";

import Card from "../Cards/Card";
import products from "../../data/products";

function CardsList() {
    return (
        <div className="cards-list">
            {products.map(({ name, tag, price, imageSrc, available }, index) =>
                <Card key={index} src={imageSrc} name={name} tag={tag} price={price} available={available} />
            )}
        </div>
    );
}

export default CardsList;