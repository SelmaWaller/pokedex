import CardComponent from "./components/CardComponent";
import SearchBar from "./components/SearchBar";

import "./css/main.css";

function App() {
  return (
    <div>
      <header className="mt-7">
        <h2>Pokedex</h2>
        <p>Find your pokémon!</p>
      </header>
      <body>
        <SearchBar />
        <CardComponent />
      </body>
    </div>
  );
}

export default App;
