import axios from "axios";

const instance =axios.create( {
    method: 'GET',
    url: 'https://mashape-community-urban-dictionary.p.rapidapi.com',
    params: {term: 'wat'},
    headers: {
      'X-RapidAPI-Key': 'ed23ad2dd8msh3563b60f1bb1c33p19f4b4jsn11d4b56e1279',
      'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
    }
  }
)
export default instance