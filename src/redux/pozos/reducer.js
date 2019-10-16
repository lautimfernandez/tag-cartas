import pozos from "../../data/pozos";
import { type as getLastCardsType } from "../pozos/actions/getLastCards";
import { type as cleanupType } from "../cleanup";

const initialState = {
    pozos: pozos,
    cartas: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (getLastCardsType): {
            return {
                ...state,
                cartas: (action.cartas)
            }
        }
        case (cleanupType): {
            return {
                ...state,
                pozos: pozos,
                cartas: []
            }
        }
        default:
            return state;
    }
}


export default reducer;