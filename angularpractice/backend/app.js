const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const app = express();

const coach = require('./routes/coach');


//Setting CORS : --> cross origin resource shareing
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods","GET,HEAD,OPTIONS,POST,PUT");
    next();
})

// using for request parsing
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

//connectivity with mongo db
mongoose.connect('mongodb+srv://Manish:ItKwiitUWqqjqPL0@cluster0-puvlp.mongodb.net/train?retryWrites=true&w=majority',{ useNewUrlParser: true }).then(result=>{
    console.log('connect');
}).catch(error=>{
    console.log('error :',error);
})


app.use('/coach',coach);

module.exports = app;


// run server cmmand  -->  npm run start:server