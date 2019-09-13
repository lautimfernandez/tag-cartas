import getCartasService from "../../../services/cartasService"
export const type = 'getCartas';


const getCartas =  () => async dispatch => {
   const cartas = await getCartasService()
   debugger
   if(cartas.ok){
   dispatch({
        type,
        cartas: cartas.data
   })
   }
};

export default getCartas;


