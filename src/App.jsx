
import React, { useState } from 'react';
import NavBar from "./components/NavBar";
import PokemonCard from "./components/PokemonCard";
import { useEffect } from "react";


const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },

  {
    name: "mew",
  },
];

function App() {

  useEffect(
    () => {
      alert("hello pokemon trainer :)")
    },

    []
  );
  const [pokemonIndex, setPokemonIndex] = useState(0);



  const nextPokemon = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex + 1);
    }
    // alert("next poke index val" + pokemonIndex)
    // alert("next poke" + pokemonList[pokemonIndex].name)

    if (pokemonList[pokemonIndex + 1].name === "pikachu") {
      console.log("pika pikachu!!!");
      alert("pika pikachu")

    }
  };

  const prevPokemon = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
    }
    if (pokemonList[pokemonIndex - 1].name === "pikachu") {
      console.log("pika pikachu!!!");
      alert("pika pikachu")
    }
  };

  return (

    <div>
      <NavBar prevPokemon={prevPokemon} nextPokemon={nextPokemon} />
      <PokemonCard {...pokemonList[pokemonIndex]} />
    </div>
  );
}

export default App


