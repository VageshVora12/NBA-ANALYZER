import axios from 'axios';
export const getGames=()=>{
const url ='https://enacton-backend.herokuapp.com/game/all-games';
return axios.get(url)
}
export const getStats=()=>{
    const url ='https://enacton-backend.herokuapp.com/stats/all-stats';
    return axios.get(url)
    }
    // https://www.balldontlie.io/api/v1/stats?seasons[]=2018&seasons[]=2015
export const getPlayers=()=>{
    const url ='https://enacton-backend.herokuapp.com/player/all-players';
    return axios.get(url)
    }
    export const getTeams=()=>{
    const url ='https://enacton-backend.herokuapp.com/team/all-teams';
    return axios.get(url)
    }
    export const getSeasons=()=>{
        const url ='https://enacton-backend.herokuapp.com/statistics';
        return axios.get(url)
        }
    