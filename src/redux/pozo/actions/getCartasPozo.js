import {getCartasService} from "../../../services/cartasService"
export const type = 'getCartasPozo';


const getCartasPozo =  () => async dispatch => {
   
   const cartasPozo = await getCartasService()
   if(cartasPozo){
   dispatch({
        type,
        cartasPozo: cartasPozo
   })
   }
};

export default getCartasPozo;