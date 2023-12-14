import "./App.css";
import Counter from "./components/Counter";
import ProductsList from "./components/ProductsList";
import UserBar from "./components/UserBar";

function App() {
  return (
    <div className="App">
      <UserBar />
      <Counter />
      <ProductsList />
    </div>
  );
}

export default App;
