# liri-node-app

# LIRI Bot

### Overview
 LIRI is similar to iPhone's SIRI. LIRI is a _Language_ Interpretation and Recognition Interface. LIRI is a command line node app. It will be given a command through the terminal, which takes in parameters and returns back data.

### Technologies Used
This node app requires the use of Twitter, Spotify, and OMBD APIs. I downloaded the Twitter, Spotify, and Request npm packages for this assignment.

### How LIRI Works

1. When you type `node liri.js my-tweets`

	*LIRI will return your last 20 tweets

2. When you type `node liri.js spotify-this-song '<song name>'`

	*LIRI will return the artist, song's name, preview link, and album the song is from

	*if no song is provided, LIRI will return the data for "The Sign" by Ace of Base

3. When you type `node liri.js movie-this '<movie name>'`

	*LIRI will return:

	   * Title of the movie.

       * Year the movie came out.

       * IMDB Rating of the movie.

       * Rotten Tomatoes Rating of the movie.

       * Country where the movie was produced.

       * Language of the movie.

       * Plot of the movie.

       * Actors in the movie.

    *if no movie is provided, LIRI will return the data for "Mr. Nobody"

4. When you type `node liri.js do-what-it-says`

	*LIRI will read the text inside the random.txt file and carry out that command
	
	*it should run the spotify-this-song command for Backstreet Boys' "I Want It That Way"

