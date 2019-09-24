import {updateCartas} from "../../../services/cartasService"

export const type = 'updateState';



const constructDiagnose = (state) => {
    const diagnose = [];
    for (var key in state) {
        if (state.hasOwnProperty(key)) {
          if(state[key]===true)  
          diagnose.push(key);
        }
      };
      return diagnose.join(",");
    
}

const updateState = (carta,state,nombre) => async dispatch => {
    const diagnose = constructDiagnose(state);
    
    await updateCartas(carta, diagnose,nombre);
    
    dispatch({
         type,
         cartadiag : {carta,diagnose,nombre}
    });
 };

export default updateState;