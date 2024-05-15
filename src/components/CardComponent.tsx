import React from "react";
import { PokemonResult } from "../lib/pokeapi";

interface Props {
  pokemon: PokemonResult;
}

const CardComponent: React.FC<Props> = ({ pokemon }) => {
  return (
    <div className="card">
      <img
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
      />
      <div className="info">
        <h4>{pokemon.name.toUpperCase()}</h4>
        <p className="mt-6 font-bold">Types:</p>
        <ul>
          {pokemon.types.map((type) => (
            <li>{type.type.name}</li>
          ))}
        </ul>
        <p className="mt-6 font-bold">Moves:</p>
        <ul className="max-h-64 overflow-y-auto">
          {pokemon.moves.map((move) => (
            <li>{move.move.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardComponent;
