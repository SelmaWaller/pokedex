import React from "react";
import SearchBar from "./components/SearchBar";
import CardComponent from "./components/CardComponent";
import { PokemonResult } from "./lib/pokeapi";
import "./css/global.css";

const fetchPokemon = async (search: string) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`
    );
    if (!response.ok) {
      return {
        error: `Pokémon not found: ${response.status}`,
      };
    }
    const pokemon = (await response.json()) as PokemonResult;
    return { pokemon };
  } catch (error) {
    return {
      error: `Unkown error: ${error}`,
    };
  }
};

const App: React.FC = () => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [pokemon, setPokemon] = React.useState<PokemonResult | null>(null);

  const handleSearch = async (search: string) => {
    if (search === "") {
      setPokemon(null);
      return;
    }
    setLoading(true);
    const result = await fetchPokemon(search);
    setPokemon(result.pokemon || null);
    setError(result.error || null);
    setLoading(false);
  };

  return (
    <>
      <header className="mt-7">
        <h2>Pokedex</h2>
        <p>Find your pokémon!</p>
      </header>
      <main>
        <SearchBar onSearch={handleSearch} />
        {loading && <p className="mt-5">Loading...</p>}
        {error && <p className="mt-5 text-pink-700">{error}</p>}
        {pokemon && <CardComponent pokemon={pokemon} />}
      </main>
    </>
  );
};

export default App;
