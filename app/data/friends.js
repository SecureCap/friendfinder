//below data will hold all of the reserved tables

var friendsArray = [
    {
		name:"Tom",
		photo: "#",
		scores: [1, 3, 1, 2, 3, 1, 1, 1, 1, 1]
	},
	{
		name:"John",
		photo: "#",
		scores: [1, 3, 1, 2, 3, 1, 1, 4, 1, 1]
	},
	{
		name:"Ron",
		photo: "#",
		scores: [3, 3, 5, 2, 3, 1, 5, 1, 4, 1]
	} 
];


//export the array. this makes it accessible to other files using require.
module.exports = friendsArray;