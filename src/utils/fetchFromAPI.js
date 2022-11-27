import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
   params: {
      maxResults: '50'
   },
   headers: {
      'X-RapidAPI-Key': '098e418f99msh32d76077942a978p12795fjsn4529f6e03866',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
   }
};

export const fetchFromAPI = async (url) => {
   const {data} = await axios.get(`${BASE_URL}/${url}`, options);

   return data;
}