var express = require('express') ;
var mongoose = require('mongoose');
var cors = require('cors');
var axios = require('axios');
// var playerRoute = require('./routes/playerRoute.js');
// var getPlayers = require('./apis/players.js');

require('dotenv').config();

var app = express();
var port = process.env.PORT || 9000;
app.use(express.json());
app.use(cors());


// get all players data 
app.get('/player/all-players',(req,res) =>{
    axios.get('https://balldontlie.io/api/v1/players')
    .then(function(response){
        console.log(response.data.data);
        let data= '';
        for(i=0;i<response.data.data.length;i++){
            data += 'Player '+ (i+1) + "<br>ID: " + response.data.data[i].id + '<br>FULL NAME:' + response.data.data[i].first_name+ "  " + response.data.data[i].last_name + '<br>POSITION: ' + response.data.data[i].position + '<br>TEAM ID: ' + response.data.data[i].team.id + '<br>ABBREVATION: ' + response.data.data[i].team.abbreviation + '<br>CITY: ' + response.data.data[i].team.city + '<br>CONFERENCE:' + response.data.data[i].team.conference + '<br>DIVISION:' + response.data.data[i].team.division + '<br>TEAM FULL NAME:' + response.data.data[i].team.full_name + '<br>TEAM NAME:' + response.data.data[i].team.name + '<br><br><br>' ;
        }
        res.send(data);
    })
    .catch(function (err) {
        console.log(err);
        })
        .then(function(){
            console.log('Process Executed');
        })
})


// get specific player data using id

app.get('/player/:id',(req,res) =>{
    axios.get('https://www.balldontlie.io/api/v1/players/'+req.params['id'])
    .then(function(response){
        // console.log(response.data.data);
        res.send(response.data);
    })
    .catch(function (err) {
        console.log(err);
        })
        .then(function(){
            console.log('Process Executed');
        })
})






// get all teams data

app.get('/team/all-teams',(req,res) =>{
    axios.get('https://www.balldontlie.io/api/v1/teams')
    .then(function(response){
        console.log(response.data.data);
        let data= '';
        for(i=0;i<response.data.data.length;i++){
            data += 'TEAM '+ (i+1) + "<br>ID: " + response.data.data[i].id + '<br>FULL NAME:' + response.data.data[i].full_name+ "<br>NAME: " + response.data.data[i].name + '<br>ABBREVIATION: ' + response.data.data[i].abbreviation + '<br>CITY: ' + response.data.data[i].city + '<br>CONFERENCE: ' + response.data.data[i].conference + '<br>DIVISION: ' + response.data.data[i].division + '<br><br><br>';
        }
        res.send(data);
    })
    .catch(function (err) {
        console.log(err);
        })
        .then(function(){
            console.log('Process Executed');
        })
})




// get specific team data using id

app.get('/team/:id',(req,res) =>{
    axios.get('https://www.balldontlie.io/api/v1/teams/'+req.params['id'])
    .then(function(response){
        // console.log(response.data.data);
        res.send(response.data);
    })
    .catch(function (err) {
        console.log(err);
        })
        .then(function(){
            console.log('Process Executed');
        })
})




// get data for all teams


app.get('/game/all-games',(req,res) =>{
    axios.get('https://www.balldontlie.io/api/v1/games')
    .then(function(response){
        console.log(response.data.data);
        // let data= '';
        // for(i=0;i<response.data.data.length;i++){
        //     // data += 'TEAM '+ (i+1) + "<br>TEAM ID: " + response.data.data[i].id + '<br>DATE:' + response.data.data[i].date + '<br>DATE:' + response.data.data[i].date + '<br>FULL NAME:' + response.data.data[i].full_name+ "<br>NAME: " + response.data.data[i].name + '<br>ABBREVIATION: ' + response.data.data[i].abbreviation + '<br>CITY: ' + response.data.data[i].city + '<br>CONFERENCE: ' + response.data.data[i].conference + '<br>DIVISION: ' + response.data.data[i].division + '<br><br><br>';
        //     data += JSON.stringify(response.data.data[i]) ;
        // }
        res.send(response.data.data);
    })
    .catch(function (err) {
        console.log(err);
        })
        .then(function(){
            console.log('Process Executed');
        })
})


// ?seasons[]=2018&team_ids[]=1 will return games for team_id 1 for the 2018-2019 season.
// get data for all games played by specific team using its id


app.get('/games/:id',(req,res) =>{
    axios.get('https://www.balldontlie.io/api/v1/games?seasons[]=2018&team_ids[]='+req.params['id'])
    .then(function(response){
        // console.log(response.data.data);
        res.send(response.data.data[0]);
    })
    .catch(function (err) {
        console.log(err);
        })
        .then(function(){
            console.log('Process Executed');
        })
})


// get a specific game b its id

app.get('/game/:id',(req,res) =>{
    axios.get('https://www.balldontlie.io/api/v1/games/'+req.params['id'])
    .then(function(response){
        // console.log(response.data.data);
        res.send(response.data);
    })
    .catch(function (err) {
        console.log(err);
        })
        .then(function(){
            console.log('Process Executed');
        })
})


// ?seasons[]=2018&seasons[]=2015&player_ids[]=1&player_ids[]=2&postseason=true will return stats for player_ids 1 and 2 for the 2015-2016 and 2018-2019 postseason
// get data for all stats


app.get('/stats/all-stats',(req,res) =>{
    axios.get('https://www.balldontlie.io/api/v1/stats')
    .then(function(response){
        console.log(response.data.data);
        let data= '';
        for(i=0;i<response.data.data.length;i++){
            // data += 'TEAM '+ (i+1) + "<br>TEAM ID: " + response.data.data[i].id + '<br>DATE:' + response.data.data[i].date + '<br>DATE:' + response.data.data[i].date + '<br>FULL NAME:' + response.data.data[i].full_name+ "<br>NAME: " + response.data.data[i].name + '<br>ABBREVIATION: ' + response.data.data[i].abbreviation + '<br>CITY: ' + response.data.data[i].city + '<br>CONFERENCE: ' + response.data.data[i].conference + '<br>DIVISION: ' + response.data.data[i].division + '<br><br><br>';
            data += '<br>' + JSON.stringify(response.data.data[i]) + '<br>'  ;
        }
        res.send(data);
    })
    .catch(function (err) {
        console.log(err);
        })
        .then(function(){
            console.log('Process Executed');
        })
})

// example for combined queries eg for seasons and players
// ?seasons[]=2018&seasons[]=2015&player_ids[]=1&player_ids[]=2&postseason=true
// get a specific stat 

app.get('/statistics',(req,res) =>{
    axios.get('https://www.balldontlie.io/api/v1/stats?seasons[]=2018&seasons[]=2015')
    .then(function(response){
        // console.log(response.data.data);
        let data = '';
        for(i=0;i<response.data.data.length;i++){
            data += '<br><br>' + JSON.stringify(response.data.data[i]) + '<br>'  ;
        }
        res.send("Stats for seasons 2018 & 2015<br><br>"+data);
    })
    .catch(function (err) {
        console.log(err);
        })
        .then(function(){
            console.log('Process Executed');
        })
})


// season averages
// empty 


app.get('/average/season',(req,res) =>{
    axios.get('https://www.balldontlie.io/api/v1/season_averages')
    .then(function(response){
        console.log(response.data.data);
        let data= '';
            data += '<br>' + response.data.data + '<br>'  ;
        res.send(data);
    })
    .catch(function (err) {
        console.log(err);
        })
        .then(function(){
            console.log('Process Executed');
        })
})













// app.use('/player',playerRoute);
// app.use('/test',(req, res) => {
//     getPlayers();
//     res.send(res.data);
//     next();
// });

var uri = process.env.ATLAS_URI;
mongoose.connect(uri)
    .then(() => {
        console.log("mongodb started.");
    }).catch(() => {
        console.log("mongodb connection failed.")
    })
    
app.get('/',function(req,res){
    res.send('Server started..')

});

app.listen(9000, function () {
    console.log(`SERVER is running on port: ${port}`);
}
)