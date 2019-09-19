import {type as getPozosType} from "../pozos/actions/getPozos";

const initialState = { 
    pozos : [] 
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case(getPozosType):{
            return{
                ...state,
                pozos : state.pozos.concat(action.pozos)
            }
        }
        default:
            return state;
    }
}


export default reducer;