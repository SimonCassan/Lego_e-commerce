import "./App.css";
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer";
import CardsList from "./components/CardsList/CardsList";
import Cart from "./components/Cart/Cart";
import { useState } from "react";


function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex(p => p.id === product.id);
      const updatedCart = [...prevCart];
      if (itemIndex !== -1)
        updatedCart[itemIndex].quantity += 1;
      else
        updatedCart.push({ ...product, quantity: 1 });
      return updatedCart;
    })
  };

  const removeFromCart = indexToRemove => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      if (updatedCart[indexToRemove].quantity > 1)
        updatedCart[indexToRemove].quantity -= 1;
      else
        updatedCart.splice(indexToRemove, 1);
      return updatedCart;
    });
  }

  const total = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);

  const [isCartVisible, setIsCartVisible] = useState(false);
  const toggleCart = () => {
    setIsCartVisible(prev => !prev);
  };

  return (
    <>
      <Header toggleCart={toggleCart} cart={cart} />
      <main>
        <CardsList addToCart={addToCart} />
        {isCartVisible && <Cart products={cart} removeFromCart={removeFromCart} total={total} />}
      </main>
      <Footer />
    </>
  );
}

export default App;