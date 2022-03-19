const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const playerSchema = new Schema({
    first_name: {
        type: String,
        required: true,
        trim: true
    },
    height_feet: {
        type: Number,
        required: false,
        trim: true
    },
    height_inches:  {
        type: Number,
        required: false,
        trim: true
    },
    last_name: {
        type: String,
        required: true,
        trim: true
    },
    position: {
        type: String,
        trim: true
    },
    team: {
        type: Object,
        required: true
    },
    weight_pounds: {
        type: Number,
        required: false,
        trim: true
    },

})

const GetPlayers = mongoose.model('getPlayers',playerSchema);
exports.module = GetPlayers; 