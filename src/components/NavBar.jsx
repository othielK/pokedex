


function NavBar({ prevPokemon, nextPokemon, }) {

    return (
        <div>
            <button onClick={prevPokemon}>Previous</button>
            <button onClick={nextPokemon}>Next</button>
        </div>
    );
}

export default NavBar
