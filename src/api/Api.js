import axios from 'axios';
export const getGames=()=>{
const url ='https://enacton-backend.herokuapp.com/game/all-games';
return axios.get(url)
}
export const getStats=()=>{
    const url ='https://enacton-backend.herokuapp.com/stats/all-stats';
    return axios.get(url)
    }