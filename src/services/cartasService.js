import cartas from "../data/cartas.js"
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

export default getCartasService;
