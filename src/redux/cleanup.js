export const type = 'cleanup';


const cleanup = () => async dispatch => {
   dispatch({
      type,
   })
};

export default cleanup;
