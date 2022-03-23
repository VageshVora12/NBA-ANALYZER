import axios from 'axios';
export const getGames=()=>{
const url ='https://enacton-backend.herokuapp.com/game/all-games';
return axios.get(url)
// data is alrdy in json format
// .then((response)=>response.json())
// .catch((error)=>console.log(error));
}