interface PokemonType {
  type: {
    name: string;
  };
}

interface PokemonMove {
  move: {
    name: string;
  };
}

interface PokemonSprites {
  other: {
    "official-artwork": {
      front_default: string;
    };
  };
}

// based on https://pokeapi.co/docs/v2#pokemon
export interface PokemonResult {
  name: string;
  types: PokemonType[];
  moves: PokemonMove[];
  sprites: PokemonSprites;
}
