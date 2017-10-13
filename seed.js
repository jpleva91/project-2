var db = require("./models/index");

var songs_list = [
	{
	title: "Man of the Year",
	artist: "Logic",
	lyricsId: "15953433",
	soundCloudId: "91168184"
	}
];

var artists_list = [
	{
		name: "Logic"
	}
];

db.Artist.remove({}, function(err, artists) {
	console.log("removed all artists");
	db.Artist.create(artists_list, function(err, artists) {
		if (err) {
			console.log(err);
			return;
		}
		console.log("recreated all artists");
		console.log("created", artists.length, "artists");


		db.Song.remove({}, function(err, songs) {
			console.log("removed all songs");
			songs_list.forEach(function (songData) {
				var song = new db.Song({
					title: songData.title,
					lyricsId: songData.lyricsId,
					soundCloudId: songData.soundCloudId
				});
				db.Artist.findOne({name: songData.artist}, function (err, foundArtist) {
					console.log("found artist " + foundArtist.name + " for song " + song.title);
					if (err) {
						console.log(err);
						return;
					}
					song.artist = foundArtist;
					song.save(function(err, savedSong) {
						if (err) {
							return console.log(err);
						}
						console.log("saved " + savedSong.title + " by " + foundArtist.name);
					});
				});
			});
		});
	
	});
});