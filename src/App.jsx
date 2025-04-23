import "./App.css";
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer";
import CardsList from "./components/CardsList/CardsList";
import Basket from "./components/Basket/Basket";


function App() {
  return (
    <>
      <Header />
      <main>
        <CardsList />
        <Basket />
      </main>
      <Footer />
    </>
  );
}

export default App;