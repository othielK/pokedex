
function PokemonCard({ name, imgSrc }) {

    return (
        <>
            <h1>{name}</h1>
            {imgSrc === undefined ? "???" : <img src={imgSrc} alt={name} />}
        </>
    )
}
export default PokemonCard



