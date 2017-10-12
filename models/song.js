const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SongSchema = new Schema({
	artistId: String,
	title: String,
	lyrics: String,
	soundCloudId: String
});

let Song = mongoose.model('Song', SongSchema);

module.exports = Song;