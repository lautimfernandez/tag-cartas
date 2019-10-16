import { type as getCartasType } from "../cartas/actions/getCartas";
import { type as getCartasByIdPozoType } from "../cartas/actions/getCartasByIdPozo";
import { type as loadMoreCardsByIdPozoType } from "../cartas/actions/loadMoreCards";
import { type as updateStateType } from "../cartas/actions/updateState";
import { type as cleanupType } from "../cleanup";

const initialState = {
    cartas: [],
    moreCards: []
}

const updateState2 = (c, action) => {

    if (action.cartadiag.carta.id === c.id) {

        return {
            ...c,
            diagnose: action.cartadiag.diagnose,
            diagnosedBy: action.cartadiag.nombre
        }

    }

    return c
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case (updateStateType): {

            return {
                ...state,
                cartas: state.cartas.map(c => updateState2(c, action))
            }
        }
        case (getCartasType): {
            return {
                ...state,
                cartas: (action.cartas)
            }
        }
        case (getCartasByIdPozoType): {
            return {
                ...state,
                cartas: (action.cartas)
            }
        }
        case (loadMoreCardsByIdPozoType): {
            return {
                ...state,
                moreCards: (action.moreCards),
                cartas: (action.oldCards).concat(action.moreCards)
            }
        }
        case (cleanupType): {
            return {
                ...state,
                cartas: [],
                moreCartas: []
            }
        }
        default:
            return state;
    }
}

export default reducer;