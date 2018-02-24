//Express
var express = require('express');
var app = express();

app.set('view engine', 'pug');

app.use('/', express.static('public'));


app.get('/', function(req,res) {
    res.sendFile('/index.html');
});

app.listen(3000, function() {
    console.log('This is working!');
});