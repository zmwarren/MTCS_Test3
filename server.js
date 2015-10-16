var express = require('express');
var path = require('path');
var http = require('http');
var fs = require('fs');
var bodyParser = require('body-parser');
var db = require('./model/db');
var animalModel = require('./model/animal');



var app = express();

app.set('port', (process.env.PORT || 3000));

var animalRoutes = require('./routes/animal');

app.use(express.static('public'));

app.use('/api/animal', animalRoutes);

app.get('/public', function(req, res){
	res.readFile('index.html')
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});