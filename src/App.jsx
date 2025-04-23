import "./App.css";
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer";
import CardsList from "./components/CardsList/CardsList";
import Basket from "./components/Basket/Basket";
import { useState } from "react";


function App() {
  const [basket, setBasket] = useState([]);
  const addToBasket = (product) => {
    setBasket((prevBasket) => [...prevBasket, product])
  };
  const total = basket.reduce((sum, product) => sum + product.price, 0);

  return (
    <>
      <Header />
      <main>
        <CardsList addToBasket={addToBasket} />
        <Basket products={basket} total={total} />
      </main>
      <Footer />
    </>
  );
}

export default App;