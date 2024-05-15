import React from "react";
import SearchBar from "./components/SearchBar";
import CardComponent from "./components/CardComponent";
import { PokemonResult } from "./lib/pokeapi";
import "./css/global.css";

const fetchPokemon = async (search: string) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`;
  const response = await fetch(url);
  const data = (await response.json()) as PokemonResult;

  return {
    pokemon: data,
  };
};

function App() {
  const [loading, setLoading] = React.useState(false);
  const [pokemon, setPokemon] = React.useState<PokemonResult | null>(null);

  const handleSearch = async (search: string) => {
    if (search === "") {
      setPokemon(null);
      return;
    }
    setLoading(true);
    const result = await fetchPokemon(search);
    setPokemon(result.pokemon || null);
    setLoading(false);
  };
  return (
    <div>
      <header className="mt-7">
        <h2>Pokedex</h2>
        <p>Find your pokémon!</p>
      </header>
      <main>
        <SearchBar onSearch={handleSearch} />
        {loading && <p className="mt-7">Loading...</p>}
        {pokemon && <CardComponent pokemon={pokemon} />}
      </main>
    </div>
  );
}

export default App;
