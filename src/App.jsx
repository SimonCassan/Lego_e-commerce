import "./App.css";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer";
import CardsList from "./components/CardsList/CardsList";
import Cart from "./components/Cart/Cart";
import { useEffect, useState } from "react";
import CheckBox from "./components/Checkbox/Checkbox";
import Select from "./components/Select/Select";


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

  const [showAvailable, setShowAvailable] = useState(false);
  const toggleAvailable = () => {
    setShowAvailable(prev => !prev)
  }

  const [category, setCategory] = useState("Tous");
  const switchCategory = (value) => {
    setCategory(() => value);
  };

  const [products, setProducts] = useState([]);
  const [tags, setTags] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/src/data/products.json');
        const result = await response.json();
        setProducts(result);

        const uniqueTags = [...new Set(result.map(product => product.tag))];
        setTags(uniqueTags);

      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    }
    fetchData();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header toggleCart={toggleCart} cart={cart} onSearchChange={setSearchTerm} />
      <main>
        <CheckBox toggleAvailable={toggleAvailable} />
        <Select onChange={switchCategory} tagsList={tags} />
        <CardsList addToCart={addToCart} showAvailable={showAvailable} showCategory={category} productsList={products} searchProducts={filteredProducts} />
        {isCartVisible && <Cart products={cart} removeFromCart={removeFromCart} total={total} />}
      </main>
      <Footer />
    </>
  );
}

export default App;