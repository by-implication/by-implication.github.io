var data = [
	{
		nickname: "Levi",
		name: "Levi Tan Ong",
		roles: "Designer, Developer, Token Bald Guy",
		link: "http://github.com/levitanong",
		founder: true
	},
	{
		nickname: "Phi",
		name: "Philip Cheang",
		roles: "Designer, Developer, Obsessive Pixel Nudger",
		link: "http://phi.ph",
		founder: true
	},
	{
		nickname: "Rodz",
		name: "Rodrick Tan",
		roles: "Designer, Business Analyst, Money Counter",
		founder: true
	},
	{
		nickname: "Kenneth",
		name: "Kenneth Yu",
		roles: "Business Analyst, Strategy and Tactics",
		link: "http://twitter.com/kennethgyu",
		founder: true
	},
	{
		nickname: "Wil",
		name: "Wilhansen Li",
		roles: "Developer, “I Invented That”",
		link: "http://wilhansen.li",
		founder: true
	},
	// {
	// 	nickname: "Pepe",
	// 	name: "Jose Bawagan",
	// 	roles: "Developer, Funarchist Frogrammer",
	// 	link: "http://syk0saje.com"
	// },
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
	// {
	// 	nickname: "Mon",
	// 	name: "Monica Esquivel",
	// 	roles: "Artist, Designer, “I Drew These Portraits”",
	// },
	// {
	// 	nickname: "Patsy",
	// 	name: "Patricia Lascano",
	// 	roles: "Artist, Designer, Bird Enthusiast",
	// },
	{
		nickname: "Alvin",
		name: "Alvin Dumalus",
		roles: "Developer, “I Beat Your High Score”",
		link: "http://github.com/alvinfrancis"
	},
	// {
	// 	nickname: "Thomas",
	// 	name: "Thomas Dy",
	// 	roles: "Pleasant Programmer, Infra, DevOps",
	// 	link: "http://pleasantprogrammer.com"
	// },
	{
		nickname: "Jim",
		name: "James Choa",
		roles: "Developer, Infra, The Security Specialist",
		link: "https://github.com/trigger-happy"
	},
	{
		nickname: "Enzo",
		name: "Lorenzo Vergara",
		roles: "Developer, “It’s a bug, but I like it.”",
	},
	{
		nickname: "Jay",
		name: "J Joseph Ugalino",
		roles: "Developer, Professional Annoyance",
		link: "https://github.com/jthestupidkid"
	},
	{
		nickname: "Oscar",
		name: "Oscar Silva",
		roles: "Employee, Goat"
	},
	{
		nickname: "Pierre",
		name: "Pierre Chavez",
		roles: "Designer, Maker of Pretty Things"
	},
	{
		nickname: "Pao",
		name: "Marie Frances Salvan",
		roles: "Research, Data Analyst, Cat Herder"
	}
	// {
	// 	nickname: "Fordz",
	// 	name: "Daniel Fordan",
	// 	roles: "Developer, Soon-to-be Lawyer"
	// },
];
data.forEach(function(person) {
	person.imageSrc = require('./people/'+person.nickname+'.png');
});
export default data;
