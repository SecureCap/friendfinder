//load data
//we are linking our routes to a series of "data" sources that hold arrays of information on table-data, waitinglist,

var friends = require("../data/friends.js");


//routing

module.exports = function(app) {
    //api gets request


    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function(req, res) {
		res.json(friends)
        //our server will respond to request and let users know if they have a match or not
        var bestMatch = {
			name: "",
			photo: "",
			friendDifference: 1000
		};
		var userData 	= req.body;
		var userName 	= userData.name;
		var userPhoto 	= userData.photo;
		var userScores 	= userData.scores;

		var totalDifference = 0;

		//loop through the friends data array of objects to get each friends scores
		for(var i = 0; i < friendsData.length-1; i++){
			console.log(friends[i].name);
			totalDifference = 0;

			//loop through that friends score and the users score and calculate the absolute difference between the two and push that to the total difference variable set above
			for(var j = 0; j < 10; j++){
				// We calculate the difference between the scores and sum them into the totalDifference
				totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
				// If the sum of differences is less then the differences of the current "best match"
				if (totalDifference <= bestMatch.friendDifference){

					// Reset the bestMatch to be the new friend. 
					bestMatch.name = friends[i].name;
					bestMatch.photo = friends[i].photo;
					bestMatch.friendDifference = totalDifference;
				}
			}
		}

		// Finally save the user's data to the database (this has to happen AFTER the check. otherwise,
		// the database will always return that the user is the user's best friend).
		friends.push(userData);

		// Return a JSON with the user's bestMatch. This will be used by the HTML in the next page. 
		res.json(bestMatch);
    });
};