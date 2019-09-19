import {getCartasService} from "../../../services/cartasService"
export const type = 'getPozos';

const getPozos =  () => async dispatch => {
   const cartas = await getCartasService()
   if(cartas){
   const pozos = cartas.map(c => JSON.parse(c.well));
   const uniquePozos = Array.from(new Set(pozos));
   debugger;
   dispatch({
        type,
        pozos : uniquePozos
   })
   }
};

export default getPozos;
