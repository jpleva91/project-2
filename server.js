const express = require('express'),
	app = express(),
	bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var db = require('./models');

app.use(express.static('public'));

app.get('/', function(req, res) {
	res.sendFile('views/index.html' , { root : __dirname});
});

app.get('/api/songs', function(req, res) {
	db.Song.find().populate('artist')
	.exec(function(err, songs) {
		if (err) { return console.log("index error: " + err); }
		res.json(songs);
	});
});

app.get('/api/songs/:id', function(req, res) {
	db.Song.findOne({ _id: req.params.id }, function(err, data) {
		res.json(data);
	});
});

app.post('/api/songs', function (req, res) {
	let newSong = new db.Song({
		title: req.body.title,
		lyrics: req.body.lyrics,
		soundCloudId: req.body.soundCloudId
	});

	db.Artist.findOne({name: req.body.artist}, function(err, artist) {
		if(err) {
			return console.log(err);
		}
		newSong.artist = artist;

		newSong.save(function(err, song) {
			if (err) {
				return console.log("save error: " + err);
			}
			console.log("saved ", song.title);

			res.json(song);
		});
	});
});

app.delete('/api/songs/:id', function (req, res) {
	console.log("songs delete", req.params);
	let songId = req.params.id;

	db.Song.findOneAndRemove({ _id: songId }, function(err, deletedSong) {
		res.json(deletedSong);
	});
});


app.listen(process.env.PORT || 3000, function() {
	console.log("Express server running on PORT: 3000");
});