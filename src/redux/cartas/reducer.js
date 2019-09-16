import {type as getCartasType} from "../cartas/actions/getCartas";
import {type as updateStateType} from "../cartas/actions/updateState";

const initialState = { 
    cartas : [] 
}

const updateState2 = (c,action) =>{
    debugger;
    
    
    if(action.cartadiag.carta.id === c.id){
        
        return{
            ...c,
            diagnose : c.diagnose.concat(action.cartadiag.diagnose)    
        }
       
    }
    
    return c
}

const reducer = (state = initialState, action) => {

    switch(action.type){
        case(updateStateType):{
            debugger;
            return{
                ...state,
                cartas : state.cartas.map(c => updateState2(c,action))
            }
        }
        case(getCartasType):{
            return{
                ...state,
                cartas : state.cartas.concat(action.cartas)
            }
        }
        default:
            return state;
    }
}

export default reducer;