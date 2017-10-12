var db = require("./models/index");

var artists_list = [
	{},
	{}
];

var songs_list = [
	{},
	{}
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


		db.Song.remove({});
	});
});