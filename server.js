const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


mongoose.connect('mongodb://localhost:2707/test');
var db = mongoose.connection;
var user = require('./controler/user')
var app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json())
var port = process.env.PORT || 3000
app.listen(port,( )=>{
    console.log('Server started on port '+ port);
}) 

