import React from "react";

interface Props {
  onSearch: (search: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [search, setSearch] = React.useState("");

  return (
    <div className="searchbar">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Bulbasaur"
      />
      <button onClick={() => onSearch(search)}>Search</button>
    </div>
  );
};

export default SearchBar;
