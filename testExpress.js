// import express module

var express = require('express');
var fs = require('fs');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
	res.send(fs.readFileSync("index.html", "utf-8"));
});

app.listen(3000);
console.log('Server running');
