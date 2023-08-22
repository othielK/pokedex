function PokemonCard() {
    const pokemon = pokemonList[0];
    // console.log(pokemon.name)
    return (

        <div>
            <figure>
                {pokemon.imgSrc === undefined ? "???" : <img src={pokemon.imgSrc} />}
                <figcaption>{pokemon.name}</figcaption>
            </figure>
        </div>

    )
}

const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name: "mew",
    },
];

export default PokemonCard