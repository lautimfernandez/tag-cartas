import {getCartaByIdPozo} from "../../../services/cartasService"
export const type = 'getLastCards';


const getLastCards =  () => async dispatch => {
   const [card140, card143, card146, card147] = await Promise.all([getCartaByIdPozo(140, 1), getCartaByIdPozo(143, 1), getCartaByIdPozo(146, 1), getCartaByIdPozo(147, 1)]);
   if(card140){
   dispatch({
        type,
        cartas: [...card140, ...card143, ...card146, ...card147]
   })
   }
};

export default getLastCards;
