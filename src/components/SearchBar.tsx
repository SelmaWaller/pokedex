import React from "react";

interface Props {
  onSearch: (search: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [search, setSearch] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(search);
  };

  return (
    <form onSubmit={handleSubmit} className="searchbar">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Bulbasaur"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
