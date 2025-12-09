import "./App.css";
import products from "./data/products";
import GroceriesAppContainer from "./Components/GroceriesAppContainer";

function App() {
  return (
    <>
      <GroceriesAppContainer products={products} />
    </>
  );
}

export default App;
