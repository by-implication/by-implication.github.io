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
		roles: "Artist, Designer, “I Drew These Portraits”",
	},
	{
		nickname: "Patsy",
		name: "Patricia Lascano",
		roles: "Artist, Designer, Bird Enthusiast",
	},
	{
		nickname: "Alvin",
		name: "Alvin Dumalus",
		roles: "Developer, “I Beat Your High Score”",
		link: "http://github.com/alvinfrancis"
	},
	{
		nickname: "Thomas",
		name: "Thomas Dy",
		roles: "Pleasant Programmer, Infra, DevOps",
		link: "http://pleasantprogrammer.com"
	},
	{
		nickname: "Jim",
		name: "James Choa",
		roles: "Developer, Infra, The Security Specialist",
		link: "https://github.com/trigger-happy"
	},
	// {
	// 	nickname: "Fordz",
	// 	name: "Daniel Fordan",
	// 	roles: "Developer, Soon-to-be Lawyer"
	// },
	{
		nickname: "Inna",
		name: "Inna Tan",
		roles: "Designer, New Girl",
		link: "http://innatan.com"
	}
];
data.forEach(function(person) {
	person.imageSrc = require('./people/'+person.nickname+'.png');
});
export default data;
