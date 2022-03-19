const express = require('express') ;
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 9000;
app.use(express.json());
app.use(cors());
const uri = process.env.ATLAS_URI;
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