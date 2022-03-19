var express = require('express');
var getPlayers = require('../apis/players.js');


const playerRoute = express.Router();

playerRoute.get("/get-players",getPlayers);

module.exports = playerRoute;