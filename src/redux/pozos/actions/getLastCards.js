import pozos from "../../../data/pozos";
import {getCartasService} from "../../../services/cartasService"
export const type = 'getLastCards';



const obtenerUltimas = (c,p) =>{
    const cartas = c.filter(c =>(c.well===p.id));
    
    var mostRecentDate = new Date(Math.max.apply(null, cartas.map( e => {
        return new Date(e.date);
     })));
     var mostRecentObject = cartas.filter( e => { 
         var d = new Date( e.date ); 
         return d.getTime() == mostRecentDate.getTime();
     })[0];
    
     return mostRecentObject;
  
}

const getLastCards =  () => async dispatch => {
   const cartas = await getCartasService()
   const ultimas = pozos.map(p => obtenerUltimas(cartas,p));
   debugger;
   if(cartas){
   dispatch({
        type,
        cartas: ultimas
   })
   }
};

export default getLastCards;
