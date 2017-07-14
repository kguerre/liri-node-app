//var nodeArgs = process.argv;
var action = process.argv[2];
var input = process.argv[3];

var Twitter = require('twitter');

var keys = require('./keys.js');

var Spotify = require('node-spotify-api');

var request = require("request");

var fs = require("fs");

//var movieName = "";
var songName = "";


//MY TWEETS
function myTweets() {

var tweetKeys = keys.twitterKeys;
//console.log(tweetKeys);

var client = new Twitter(tweetKeys);
//console.log(client);

var params = {greetingsfromKG: 'nodejs'};
//console.log(params);
//console.log("tweet tweet");

client.get('statuses/user_timeline', params, function(error, tweets, response) {
  
  if (!error)

  	for (var i = 0; i < tweets.length; i++) {
  	console.log(tweets[i].created_at);
  	console.log(tweets[i].text);
  	}
});
}

//SPOTIFY THIS SONG
function spotifyThisSong() {

var spotKeys = keys.spotifyKeys;
//console.log(spotKeys);
 
var spotify = new Spotify(spotKeys);
//console.log(spotify);

//var songName = "";

if (action === 'spotify-this-song' && process.argv.length === 3) {

	songName = "The Sign, Ace of Base";

} else if (action === 'spotify-this-song' && process.argv.length > 3) {

	songName = input;
}

// for (var i = 3; i < nodeArgs.length; i++) {
//   if (nodeArgs.length > 3) {
//     songName = songName + "+" + nodeArgs[i];
//   } else {
//     songName += nodeArgs[i];
//   }
// }
//console.log(songName);

spotify.search({ type: 'track', query: songName, limit: 1 }, function(err, data) {
  if (!err) {
    //return console.log('Error occurred: ' + err);

    console.log(data.tracks.items[0].artists[0].name);
	console.log(data.tracks.items[0].name);
	console.log(data.tracks.items[0].preview_url);
	console.log(data.tracks.items[0].album.name); 
  }
});
}

//MOVIE THIS
function movieThis() {

	var movieName = "";

	if (process.argv.length === 3) {

		movieName = 'Mr. Nobody';

	} else if (process.argv.length > 3) {

		movieName = input;
	}

	// for (var i = 3; i < nodeArgs.length; i++) {
	// 	if (i > 3) {
	// 		movieName = movieName + "+" + nodeArgs[i];
	// 	}
	// 	else {
	// 		movieName += nodeArgs[i];
	// 	}
	// }

	
	var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";

	//console.log(queryUrl);

	request(queryUrl, function(error, response, body) {

  	if (!error && response.statusCode === 200) {

    //console.log(JSON.parse(body));
    console.log("Title: " + JSON.parse(body).Title);
    console.log("Year: " + JSON.parse(body).Year);
    console.log("IMBD Rating: " + JSON.parse(body).imdbRating);
    console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
    console.log("Country: " + JSON.parse(body).Country);
    console.log("Language: " + JSON.parse(body).Language);
    console.log("Plot: " + JSON.parse(body).Plot);
    console.log("Actors: " + JSON.parse(body).Actors);

  }

});

}

//DO WHAT IT SAYS
function doWhatItSays() {

	fs.readFile("random.txt", "utf8", function(error, data) {

	  if (!error) {
	     //return console.log(error);
	     //console.log(data)
	     }
	     var dataArray = data.split(",");
	     // action = dataArray[0];
	     // console.log(action);
	     input = dataArray[1];
	     songName = input;
	     console.log(songName);

	     spotifyThisSong(songName);
	  	});
	}


switch (action) {
  case "my-tweets":
    myTweets();
    break;

  case "spotify-this-song":
    spotifyThisSong();
    break;

  case "movie-this":
    movieThis();
    break;

  case "do-what-it-says":
    doWhatItSays();
    break;
}