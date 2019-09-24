import {type as getCartasPozoType} from "../pozo/actions/getCartasPozo";

const initialState = { 
    cartasPozo : [] 
}

const reducer = (state = initialState, action) => {
    
    switch(action.type){
        
        case(getCartasPozoType):{
            return{
                ...state,
                cartasPozo : (action.cartasPozo)
            }
        }
        default:
            return state;
    }
}

export default reducer;