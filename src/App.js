import CardComponent from "./components/CardComponent";
import SearchBar from "./components/SearchBar";

import "./css/main.css";

function App() {
  return (
    <header className="mt-7">
      <h2>Pokedex</h2>
      <p>Find your pokémon!</p>
      <SearchBar />
      <CardComponent />
    </header>
  );
}

export default App;
