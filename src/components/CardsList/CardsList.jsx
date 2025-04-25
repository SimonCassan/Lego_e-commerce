import "./cardslist.css";

import Card from "../Cards/Card";

function CardsList({ addToCart, showAvailable, showCategory, productsList, searchProducts }) {
    const productsToDisplay = searchProducts.length > 0 ? searchProducts : productsList;

    return (
        <div className="cards-list">
            {productsToDisplay
                .filter(product => {
                    const matchAvailability = product.available || !showAvailable;
                    const matchCategory = showCategory === "Tous" || product.tag === showCategory;

                    return matchAvailability && matchCategory;
                })
                .map(product => (
                    <Card key={product.id} product={product} addToCart={addToCart} />
                ))}
        </div>
    );
}

export default CardsList;