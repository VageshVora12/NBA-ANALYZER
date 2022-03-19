var axios = require('axios');
var express = require('express');
var playerRoute = require('../routes/playerRoute.js');
var GetPlayers = require('../models/players.model.js');
function getPlayers(){

    axios.get('https://balldontlie.io/api/v1/players')
    .then(function(res){
        console.log(res.data.data);
        // not working
        // res.send('yeah')
    })
    .catch(function (err) {
        console.log(err);
        })
        .then(function(){
            console.log('go to www.xyz.com for documentation');
        })
}

// function getPlayersSearch(){
//     axios.get('https://balldontlie.io/api/v1/players?search=lebron')
//     .then(function(res){
//         console.log(res.data);
//     }).catch(function(err){
//         console.error(err);
//     })
// }

// function getPlayersId(){
//     axios.get('https://balldontlie.io/api/v1/players/237')
//     .then(function(res){
//         console.log(res.data);
//     }).catch(function(err){
//         console.error(err);
//     })
// }

module.exports = getPlayers;
// module.exports = getPlayersSearch;
// module.exports = getPlayersId;
