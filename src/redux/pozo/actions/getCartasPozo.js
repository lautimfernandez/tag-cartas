import {getCartaByIdPozo} from "../../../services/cartasService"
export const type = 'getCartasPozo';


const getCartasPozo =  (pozoId) => async dispatch => {
   
   const cartasPozo = await getCartaByIdPozo(pozoId)
   if(cartasPozo){
   dispatch({
        type,
        cartasPozo: cartasPozo
   })
   }
};

export default getCartasPozo;