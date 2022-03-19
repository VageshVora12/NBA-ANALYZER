var express = require('express') ;
var mongoose = require('mongoose');
var cors = require('cors');
var playerRoute = require('./routes/playerRoute.js');

require('dotenv').config();

var app = express();
var port = process.env.PORT || 9000;
app.use(express.json());
app.use(cors());

app.use('/player',playerRoute)

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