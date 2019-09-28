import pozos from "../../data/pozos";
import {type as getLastCardsType} from "../pozos/actions/getLastCards";

const initialState = { 
    pozos : pozos, 
    cartas : []  
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case(getLastCardsType):{
            return{
                ...state,
                cartas : (action.cartas)
            }
        }
        default:
            return state;
    }
}


export default reducer;