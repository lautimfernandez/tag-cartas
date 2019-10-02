import {getWellsFromApi} from "../../../services/wells"
export const type = 'getWells';


const getWells =  () => async dispatch => {
   const wells = await getWellsFromApi();
   if(wells){
   dispatch({
        type,
        wells
   })
   }
};

export default getWells;