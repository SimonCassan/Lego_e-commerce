import "./App.css";
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer";

function Card() {
  const imageSrc = "https://www.lego.com/cdn/cs/set/assets/blt6cdf0b53146b5519/10294_Prod.png?format=webply&fit=bounds&quality=100&width=400&height=400&dpr=1";
  const productName = "Titanic";
  const category = "Historique";
  const price = 199.99;
  return (
    <div className="card">
      <img src={imageSrc} alt="Illustration lego" />
      <h2>{productName}</h2>
      <p className="card-category">{category}</p>
      <p>{price}€</p>
      <a className="card-btn" href="#">Ajouter</a>
    </div>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Card />
      </main>
      <Footer />
    </>
  );
}

export default App;