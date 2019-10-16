import { type as getCartasPozoType } from "../pozo/actions/getCartasPozo";
import { type as getWells } from "../pozo/actions/getWells";
import { type as cleanupType } from "../cleanup";

const initialState = {
    cartasPozo: [],
    wells: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (getCartasPozoType): {
            return {
                ...state,
                cartasPozo: (action.cartasPozo)
            }
        }
        case (getWells): {
            return {
                ...state,
                wells: (action.wells)
            }
        }
        case (cleanupType): {
            return {
                ...state,
                cartasPozo: [],
                wells: []
            }
        }
        default:
            return state;
    }
}

export default reducer;