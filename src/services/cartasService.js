import axios from 'axios';

const getCartasService = () =>
  axios.get('https://dynacards.herokuapp.com/cards',{params :{
    diagnose : ""
  }})
    .then(response => 
        {
            debugger;
          
            return response.data.cards
        }
)
const getCartaByIdPozo = (pozoId) =>
        axios.get('https://dynacards.herokuapp.com/cards', {params : {
          well : pozoId
          }
        })
        .then(response => {
          debugger
          return response.data.cards
        })

const updateCartas = ({id}, diagnose,diagnosedBy) =>
  axios.put(`https://dynacards.herokuapp.com/cards/${id}`, {diagnose,diagnosedBy} )

export {getCartasService, updateCartas,getCartaByIdPozo};
