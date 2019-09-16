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

const updateState = (carta,state) => async dispatch => {
    const diagnose = constructDiagnose(state);
    debugger
    await updateCartas(carta, diagnose);
    debugger
    dispatch({
         type,
         cartadiag : {carta,diagnose}
    });
 };

export default updateState;