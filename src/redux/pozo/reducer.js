import {type as getCartasPozoType} from "../pozo/actions/getCartasPozo";
import {type as getWells} from "../pozo/actions/getWells";

const initialState = { 
    cartasPozo : [],
    wells: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        
        case(getCartasPozoType):{
            return{
                ...state,
                cartasPozo : (action.cartasPozo)
            }
        }
        case(getWells):{
            return{
                ...state,
                wells : (action.wells)
            }
        }
        default:
            return state;
    }
}

export default reducer;