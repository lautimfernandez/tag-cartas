import {getCartasService} from "../../../services/cartasService"
export const type = 'getCartas';


const getCartas =  () => async dispatch => {
   const cartas = await getCartasService()
   debugger
   if(cartas){
   dispatch({
        type,
        cartas: cartas
   })
   }
};

export default getCartas;


