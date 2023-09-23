export default function NavBar({ pokemonList, setPokemonIndex }) {
  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <button
          type="button"
          key={index}
          onClick={() => setPokemonIndex(index)}
        >
          {pokemon.name}
        </button>
      ))}
    </div>
  );
}
