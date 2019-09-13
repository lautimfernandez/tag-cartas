import cartas from "../data/cartas.js"

const getCartasService = () => {
    return Promise.resolve( {
        ok: true,
        data : cartas
    })
}

export default getCartasService;