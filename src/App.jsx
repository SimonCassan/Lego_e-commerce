import "./App.css";
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer";
import CardsList from "./components/CardsList/CardsList";


function App() {
  return (
    <>
      <Header />
      <main>
        <CardsList />
      </main>
      <Footer />
    </>
  );
}

export default App;