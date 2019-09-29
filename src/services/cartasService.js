import axios from 'axios';

const getCartasService = () =>
  axios.get('https://dynacards.herokuapp.com/cards')
    .then(response => 
        {
            
          
            return response.data.cards
        }
)
const getCartaByIdPozo = (pozoId, limit = 50) =>
        axios.get('https://dynacards.herokuapp.com/cards', {params : {
          well : pozoId,
          limit
          }
        })
        .then(response => {
          
          return response.data.cards
        })

const updateCartas = ({id}, diagnose,diagnosedBy) =>
  axios.put(`https://dynacards.herokuapp.com/cards/${id}`, {diagnose,diagnosedBy} )

export {getCartasService, updateCartas,getCartaByIdPozo};
