import axios from 'axios';

const getCartasService = () =>
  axios.get('https://dynacards.herokuapp.com/cards')
    .then(response => 
        {
            debugger;
            console.log(response)
            return response.data.cards
        }
)

const updateCartas = ({id}, diagnose) =>
  axios.put(`https://dynacards.herokuapp.com/cards/${id}`, {diagnose})

export {getCartasService, updateCartas};
