var express = require('express');
var http = require('http');

var app = express();

app.get('/hello', function(req, res, next){
    console.log("enter hello");
    res.send('enter hello');
});

var server = http.createServer(app);

server.listen(8000);
