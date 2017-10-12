const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SongSchema = new Schema({
	title: String,
	artist: {type: Schema.Types.ObjectId, ref: 'Artist'},
	lyrics: String,
	soundCloudId: String
});

let Song = mongoose.model('Song', SongSchema);

module.exports = Song;