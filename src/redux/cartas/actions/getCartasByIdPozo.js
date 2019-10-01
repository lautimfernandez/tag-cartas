import {getCartasByIdPozoService} from "../../../services/cartasService"
export const type = 'getCartasByIdPozo';


const getCartasByIdPozo =  (pozoId) => async dispatch => {
   const cartas = await getCartasByIdPozoService(pozoId)
   
   if(cartas){
   dispatch({
        type,
        cartas: cartas
   })
   }
};

export default getCartasByIdPozo;


