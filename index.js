var http = require('http');
var express = require('express');
var app = express();

app.get('/favicon.ico', function(req, res) {
    http.get('http://s3.amazonaws.com/kevin-ss/favicon.ico', function(proxyRes) {
        proxyRes.pipe(res);
    });
});

app.get('/:imageId', function(req, res) {
    var image = req.params.imageId.replace(/\.png/i, '') + '.png'
    http.get('http://s3.amazonaws.com/kevin-ss/' + image , function(proxyRes) {
        proxyRes.pipe(res);
    });
});

app.listen(9001);
