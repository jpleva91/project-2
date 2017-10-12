var db = require("./models");

var new_artist = ({
	name: "Isaiah Rashad",
	songs: [],
	birthplace: "Chattanooga, TN"
});

db.Artist.create(new_artist, function(err, artist) {
	if (err) {
		return console.log("Error:", err);
	}

	console.log("Created new artist", artist._id);
	process.exit();
});