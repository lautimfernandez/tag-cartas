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

const getCartasByIdPozoService = (pozoId, page) =>
  axios.get('https://dynacards.herokuapp.com/cards', {params : {
    well: pozoId,
    page: page
    }
  })
  .then(response => {
    
    return response.data.cards
  })
const updateCartas = ({id}, diagnose,diagnosedBy) =>
  axios.put(`https://dynacards.herokuapp.com/cards/${id}`, {diagnose,diagnosedBy} )

const getCartaEspecificaByIdPozo = (pozoId,cartaId) =>
  axios.get(`https://dynacards.herokuapp.com/cards/${pozoId}/${cartaId}`)
    .then(response => 
        {
          return response.data
        }
)
const getLastUndiagnosedCard = (limit = 1) =>
  axios.get('https://dynacards.herokuapp.com/cards', {
    params: { //cambiar el endpoint por el que me traiga la ult  undiagnosed
      limit
    }
  })
    .then(response => {

      return response.data.card
    })

export { getCartasService, updateCartas, getCartaByIdPozo, getCartasByIdPozoService, getCartaEspecificaByIdPozo, getLastUndiagnosedCard };
