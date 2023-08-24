import PokemonCard from "./components/PokemonCard"




function App() {

  const pokemonList = [
    {
      name: "Bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

  return (
    <div>
      < PokemonCard {...pokemonList[0]} />
    </div>

  )
}


export default App


