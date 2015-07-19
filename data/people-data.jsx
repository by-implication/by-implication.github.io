var data = [
	{
		nickname: "Levi",
		name: "Levi Tan Ong",
		roles: "Designer, Developer",
		link: "http://github.com/levitanong"
	},
	{
		nickname: "Phi",
		name: "Philip Cheang",
		roles: "Designer, Developer, Pixel Nudger",
		link: "http://phi.ph",
	},
	{
		nickname: "Rodz",
		name: "Rodrick Tan",
		roles: "Designer, Business Analyst, Money Counter",
	},
	{
		nickname: "Kenneth",
		name: "Kenneth Yu",
		roles: "Business Analyst, Strategy and Tactics",
		link: "http://twitter.com/kennethgyu",
	},
	{
		nickname: "Wil",
		name: "Wilhansen Li",
		roles: "Developer, I Invented That",
		link: "http://wilhansen.li"
	},
	{
		nickname: "Pepe",
		name: "Pepe Bawagan",
		roles: "Developer, Funarchist Frogrammer",
		link: "http://syk0saje.com"
	},
	{
		nickname: "Albert",
		name: "Albert Dizon",
		roles: "Possibly a Programmer",
	},
	{
		nickname: "Sesky",
		name: "Jonathan Sescon",
		roles: "Developer, Company Poet",
		link: "https://github.com/jrsescon"
	},
	{
		nickname: "Mon",
		name: "Monica Esquivel",
		roles: "Artist, Designer, The Girl Who Drew These Portraits",
	},
	{
		nickname: "Patsy",
		name: "Patricia Lascano",
		roles: "Artist, Designer, Bird Enthusiast",
	},
	{
		nickname: "Alvin",
		name: "Alvin Dumalus",
		roles: "Developer",
		link: "http://github.com/alvinfrancis"
	},
	{
		nickname: "Thomas",
		name: "Thomas Dy",
		roles: "Developer, Admin, DevOps",
		link: "http://pleasantprogrammer.com"
	},
	{
		nickname: "Jim",
		name: "James Choa",
		roles: "Developer, Admin, The Security Specialist",
		link: "https://github.com/trigger-happy"
	},
	{
		nickname: "Fordz",
		name: "Daniel Fordan",
		roles: "Developer, Soon-to-be Lawyer"
	},
	{
		nickname: "Inna",
		name: "Inna Tan",
		roles: "Designer, New Girl"
	}
];
data.forEach(function(person) {
	person.imageSrc = require('./people/'+person.nickname+'.png');
});
export default data;
