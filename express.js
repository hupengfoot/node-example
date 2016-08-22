var express = require('express');

var app = express();

app.get('/hello', function(req, res, next){
    console.log("enter hello");
    res.send('enter hello');
});

app.listen(8000);

