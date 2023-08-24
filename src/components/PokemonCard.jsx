import { useState } from "react"
import PropTypes from "prop-types";

// function PokemonCard({ name, imgSrc }) {
//     return (
//         <>
//             <h1>{name}</h1>
//             {imgSrc === undefined ? "???" : <img src={imgSrc} alt={name} />}
//         </>
//     )
// }

function PokemonCard({ name, imgSrc }) {
    const [count, setCount] = useState(0)
    const pokemonIndex = () => {
        setCount(count + 1)
    }

    return (
        <>
            <div>
                <h2>{name}</h2>
                <img src={imgSrc} alt={name} />
                <h3> {count}</h3>
                <button onClick={pokemonIndex} >Next</button>
                <button onClick={() => setCount(count - 1)}>Previous</button>
            </div>
        </>
    )
}
PokemonCard.propTypes = {
    pokemonList: PropTypes.shape(
        {
            name: PropTypes.string.isRequired,
            imgSrc: PropTypes.string.isRequired,
        }).isRequired
}
export default PokemonCard



