const mongoose = require('mongoose');
const coach = mongoose.Schema({
    seatsAvl: {type:String},
    seats: [[Number]]
})
module.exports =  mongoose.model('Coach',coach);