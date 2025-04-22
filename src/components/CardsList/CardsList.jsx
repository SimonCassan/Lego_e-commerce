import Card from "./components/Cards/Card";

const url1 = "https://www.lego.com/cdn/cs/set/assets/blt6cdf0b53146b5519/10294_Prod.png?format=webply&fit=bounds&quality=100&width=400&height=400&dpr=1"
const url2 = "https://www.lego.com/cdn/cs/set/assets/blt3349f56c6f192e18/75192_Prod.png?format=webply&fit=bounds&quality=100&width=400&height=400&dpr=1";
const url3 = "https://www.lego.com/cdn/cs/set/assets/bltc6d87e5e7bacb3ae/21333.png?format=webply&fit=bounds&quality=100&width=400&height=400&dpr=1"


function CardsList() {
    return (
        <>
            <Card src={url1} name="Titanic" tag="Historique" price="199.99" />
            <Card src={url2} name="Millenium Falcon" tag="Star Wars" price="299.99" />
            <Card src={url3} name="Nuit étoilée - Van Gogh" tag="Arts" price="169.99" />
        </>
    );
}

export default CardsList;