const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ArtistSchema = new Schema({
	name: String,
	songs: [String],
	birthplace: String,
	bio: String
});

let Artist = mongoose.model('Artist', ArtistSchema);

module.exports = Artist;