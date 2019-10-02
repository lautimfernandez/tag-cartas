import axios from 'axios';

const getWellsFromApi = () =>
  axios.get('https://dynacards.herokuapp.com/wells')
    .then(response => 
        {
            
          
            return response.data
        })

export {getWellsFromApi};