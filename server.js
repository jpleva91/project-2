const express = require('express'),
	app = express(),
	bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//var db = require('./models');

app.use(express.static('public'));

app.get('/', function(req, res) {
	res.sendFile('views/index.html' , { root : __dirname});
});

app.listen(process.env.PORT || 3000, function() {
	console.log("Express server running on PORT: 3000");
});