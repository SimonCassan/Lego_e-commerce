import "./App.css";
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer";
import CardsList from "./components/CardsList/CardsList";
import Cart from "./components/Cart/Cart";
import { useState } from "react";


function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product])
  };
  const removeFromCart = indexToRemove => {
    setCart((prevCart) => prevCart.filter((item, index) =>
      index !== indexToRemove
    ));
  }
  const total = cart.reduce((sum, product) => sum + product.price, 0);

  const [isCartVisible, setIsCartVisible] = useState(false);
  const toggleCart = () => {
    setIsCartVisible(prev => !prev);
  };

  return (
    <>
      <Header toggleCart={toggleCart} />
      <main>
        <CardsList addToCart={addToCart} />
        {isCartVisible && <Cart products={cart} removeFromCart={removeFromCart} total={total} />}
      </main>
      <Footer />
    </>
  );
}

export default App;