import {getCartaEspecificaByIdPozo} from "../../../services/cartasService"
import { useState } from 'react';

export const type = 'getCarta';

const getCarta =  (pozoId, cartaId) => async dispatch => {
   
   const carta = await getCartaEspecificaByIdPozo(pozoId, cartaId)
   
   if(carta){
      dispatch({
         type, 
         carta: carta
      })
   }
   // After API operation end
   
};

export default getCarta;


