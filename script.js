const express = require('express')
const app = express()

app.set("view engine" , "ejs");

app.get('/', function (req, res){
    res.send('Vansh Hedaoo')
})

app.listen(3000);