
import {type as getCartasType} from "../cartas/actions/getCartas";
import {type as updateStateType} from "../cartas/actions/updateState";

const initialState = { 
    cartas : [] 
}

const updateState2 = (c,action) =>{
    
    
    let newState=[];
    if(action.cartadiag.carta.id === c.id){
       
        for (var key in action.cartadiag.state) {
            if (action.cartadiag.state.hasOwnProperty(key)) {
              if(action.cartadiag.state[key]===true)  
              newState.push(key);
            }
          }
          ;
        return{
            ...c,
            diagnose : c.diagnose.concat(newState),
            
        }
       
    }
    newState=[];
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