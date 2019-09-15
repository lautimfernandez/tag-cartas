import {type as golpeFluidoType} from "../cartas/actions/golpeFluido";
import {type as golpeGasType} from "../cartas/actions/golpeGas";
import {type as getCartasType} from "../cartas/actions/getCartas";

const initialState = { 
    cartas : [] 
}
const updateState = (c,type,action) =>{
    debugger;
    if(action.carta.id === c.id){
        return{
            ...c,
            diagnose : c.diagnose.concat(type) 
        }
    }
    return c
}

const reducer = (state = initialState, action) => {

    switch(action.type){
        case(golpeFluidoType):{
            return{
                ...state,
                cartas : state.cartas.map(c => updateState(c,golpeFluidoType,action)) 
            }  
        }
        case(golpeGasType):{
            return{
                ...state,
                cartas : state.cartas.map(c => updateState(c,golpeGasType,action)) 
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