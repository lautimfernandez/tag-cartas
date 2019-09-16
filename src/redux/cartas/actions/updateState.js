import {updateCartas} from "../../../services/cartasService"
export const type = 'updateState';

const constructDiagnose = ({golpeFluido, golpeGas}) => {
    const diagnose = [];
    if (golpeFluido) diagnose.push("fluidStroke");
    if (golpeGas) diagnose.push("gasStroke");
    return  diagnose.join(",");
}

const updateState = (carta,state) => async dispatch => {
    const diagnose = constructDiagnose(state);
    debugger
    await updateCartas(carta, diagnose);
    debugger
    dispatch({
         type,
         cartadiag : {carta,state}
    });
 };

export default updateState;