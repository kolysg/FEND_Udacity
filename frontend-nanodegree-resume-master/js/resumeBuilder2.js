"name" = "Koly Sengupta";
var formattedName = HTMLheaderName.replace("%data%", name);
$("#main").append(formattedName);



var bio = {
	"name": "Koly Sengupta",
	"role": "Front End Developer",
	"contactInfo": {
		"email": "koly.sg@gmail.com",
		"phone": "979----7575",
		"github": "/kolysg"
	},

	"welcomeMessage": "Thank you for visitng my page. Please contact me in the address provided.",
	"skills": ["Web Design", "Graphic Design", "Architectural Design", "Urban Design"],
	"pictureURL": "https://scontent-ord1-1.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/11390120_10207208987806072_75049282207992131_n.jpg?oh=d2f2e7b4e70a341e6a14c3cad9943ab0&oe=568D812F"
};

var formattedame = HTMLheaderName.replace("%data%", "bio.name")
$("#main").prepend(formattedName);



