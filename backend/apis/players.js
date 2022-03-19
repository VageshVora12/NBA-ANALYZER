const axios = require('axios');

function getPlayers(){
    axios.get('https://balldontlie.io/api/v1/players')
    .then(function(res){
        console.log(res.data);
    })
    .catch(function (err) {
        console.log(err);
        });
}

function getPlayersSearch(){
    axios.get('https://balldontlie.io/api/v1/players?search=lebron')
    .then(function(res){
        console.log(res.data);
    }).catch(function(err){
        console.error(err);
    })
}

function getPlayersId(){
    axios.get('https://balldontlie.io/api/v1/players/237')
    .then(function(res){
        console.log(res.data);
    }).catch(function(err){
        console.error(err);
    })
}
getPlayersId();