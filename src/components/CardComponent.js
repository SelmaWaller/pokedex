const CardComponent = () => {
  return (
    <div className="card">
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
        alt="pikachu"
      />
      <div className="info">
        <h4>name</h4>
        <p>type</p>
        <p className="mt-6">Moves:</p>
        <ul>
          <li>- moves</li>
        </ul>
      </div>
    </div>
  );
};

export default CardComponent;
