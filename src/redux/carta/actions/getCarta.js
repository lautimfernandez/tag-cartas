import {getCartaEspecificaByIdPozo} from "../../../services/cartasService"
export const type = 'getCarta';


const getCarta =  (pozoId, cartaId) => async dispatch => {
   debugger;
   const carta = await getCartaEspecificaByIdPozo(pozoId, cartaId)
   if(carta){
   dispatch({
        type, 
        carta: carta
   })
   }
};

export default getCarta;


