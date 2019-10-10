import {getCartasByIdPozoService} from "../../../services/cartasService"
export const type = 'loadMoreCardsByIdPozo';

const loadMoreCardsByIdPozo =  (pozoId, page, cards) => async dispatch => {
   const cartas = await getCartasByIdPozoService(pozoId, page)
   if(cartas){
   dispatch({
        type,
        moreCards: cartas,
        oldCards: cards
   })
   }
};

export default loadMoreCardsByIdPozo;
