import {getCartasByIdPozoService} from "../../../services/cartasService"
export const type = 'getCartasByIdPozo';


const getCartasByIdPozo =  (pozoId, page) => async dispatch => {
   const cartas = await getCartasByIdPozoService(pozoId, page)
   
   if(cartas){
   dispatch({
        type,
        cartas: cartas
   })
   }
};

export default getCartasByIdPozo;


