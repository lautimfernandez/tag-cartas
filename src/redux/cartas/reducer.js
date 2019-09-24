import {type as getCartasType} from "../cartas/actions/getCartas";
import {type as updateStateType} from "../cartas/actions/updateState";

const initialState = { 
    cartas : [] 
}

const updateState2 = (c,action) =>{
    
    
    
    if(action.cartadiag.carta.id === c.id){
        
        return{
            ...c,
            diagnose : action.cartadiag.diagnose,
            diagnosedBy : action.cartadiag.nombre    
        }
       
    }
    
    return c
}

const reducer = (state = initialState, action) => {

    switch(action.type){
        case(updateStateType):{
            
            return{
                ...state,
                cartas : state.cartas.map(c => updateState2(c,action))
            }
        }
        case(getCartasType):{
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