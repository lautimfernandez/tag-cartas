import { type as getCartaType } from "../card/actions/getCarta";
import { type as cleanupType } from "../cleanup";

const initialState = {
    carta: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (getCartaType): {
            return {
                ...state,
                carta: action.carta
            }
        }
        case (cleanupType): {
            return {
                ...state,
                carta: {}
            }
        }
        default:
            return state;
    }
}

export default reducer;