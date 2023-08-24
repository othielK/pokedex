
import PropTypes from "prop-types"

function PokemonCard({ name, imgSrc }) {

    return (
        <>
            <h1>{name}</h1>
            {imgSrc === undefined ? "???" : <img src={imgSrc} alt={name} />}
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



