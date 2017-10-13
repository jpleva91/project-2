let src = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/";

let joeyMaskOff = "313681963&";
let maskOffLyrics = "Finally got a piece of the profit" + "<br>" + "Wine and cheese in the seat by the cockpit" +"<br>" + "I ain't mean for your bitch to be watching" +"<br>" + "Eyeing me, she kept eyeing me" +"<br>" + "Everyday we just making deep profits" +"<br>" + "Money long, I'm gonna need some deep pockets" +"<br>" + "Hands are to the ceiling when I'm in the building" +"<br>" + "How you make a living? Hmm" +"<br>" + "Lately never chillin', mind is on a million" +"<br>" + "Things I gotta do";
let isaiahTheRace = "344463844";
let theRace = "Yeah, this for free, you been tryna get a plate (free lunch) You ain't smokin', you just lookin' for an 8th (uh uh)" + "<br>" + "How you ballin' if you ain't got the skates? (Ain't got the skates)" + "<br>" + "I've been nuttin' on this bitch from the Bay (from the Bay)" + "<br>" + "Sellin' out, bring my friends, you my dawg (my dawg)" + "<br>" + "Fill my fronto like an arm in the cigar (the cigar)" + "<br>" + "If I don't smoke before I eat then I'ma starve (then I'ma starve)" + "<br>" + "I throw that platinum on my teeth when I'm with y'all" + "<br>" + "Preacher man, Mr. Willie, put some hands on my dinner";

$('document').ready(function(){
	console.log("ready");
	$('iframe').attr('src', src + joeyMaskOff);

	$('.isaiah').click(function(){
		$('iframe').attr('src', src + isaiahTheRace);
		$('#lyrics').html(theRace);
	});

	// $('.joey').click(function() {
	// 	$('iframe').attr('src', src + joeyMaskOff);
	// 	$('#lyrics').html(maskOffLyrics);
	// });

	 $('.joey').click(function() {
   	$.get("https://stormy-chamber-67699.herokuapp.com/api/songs/59dff484cc8f6e0009b38ce6", function(data) {
	 		var soundcloudId = data.soundCloudId;
	 		console.log(soundcloudId);
	 		$('iframe').attr('src', src + soundcloudId);
	 	});
	 	$.get("https://lyric-api.herokuapp.com/api/find/Logic/all%20i%20do", function(data) {
	 		var lyrics = data.lyric;
	 		$('#lyrics').html(lyrics);
	 	});
	 });

/*
* === LOCAL TESTING ===
*/
	// $('.joey').click(function() {
 //  	$.get("http://localhost:3000/api/songs/59dfee777505c154a072fb8d", function(data) {
	// 		var soundcloudId = data.soundCloudId;
	// 		console.log(soundcloudId);
	// 		$('iframe').attr('src', src + soundcloudId);
	// 		$('#lyrics').html(data.lyrics);
	// 	});
	// });
});