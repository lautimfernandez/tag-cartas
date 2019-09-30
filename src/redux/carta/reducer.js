import {type as getCartaType} from "../carta/actions/getCarta";

const initialState = { 
    carta : {} 
}

const reducer = (state = initialState, action) => {
    debugger;
    switch(action.type){
        case(getCartaType):{
            return{
                ...state,
                carta : (action.carta)
            }
        }
        default:
            return state;
    }
}

export default reducer;