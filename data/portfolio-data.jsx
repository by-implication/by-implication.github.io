import {resources, involvement} from "../js/enums";

export default {
	website: {
		name: "This Website",
		id: "website",
		url: "/",
		writeup: require("./portfolio/website/writeup.md"),
		imageSrc: require("./portfolio/website/thumb.svg"),
		resources: [resources.design, resources.dev],
		involvement: ["official"],
		externalInvolvement: ["internal"],
		from: "mid 2015",
		to: "present"
	},
	storylark: {
		name: "Storylark",
		id: "storylark",
		url: "https://storylark.ph/",
		writeup: require("./portfolio/storylark/writeup.md"),
		imageSrc: require("./portfolio/storylark/thumb.png"),
		color: "#7eb8bf",
		resources: [resources.design, resources.bizdev, resources.dev],
		involvement: ["official"],
		externalInvolvement: ["internal"],
		from: "2011",
		to: "mid 2015"
	},
	sakay: {
		name: "Sakay.ph",
		id: "sakay",
		url: "http://sakay.ph/",
		writeup: require("./portfolio/sakay/writeup.md"),
		imageSrc: require("./portfolio/sakay/thumb.svg"),
		color: "#2c6c47",
		resources: [resources.design, resources.bizdev, resources.dev],
		involvement: ["official"],
		externalInvolvement: ["internal"],
		from: "late 2013",
		to: "present"
	},
	openrecon: {
		name: "Open Reconstruction",
		id: "openrecon",
		url: "http://openreconstruction.gov.ph/",
		writeup: require("./portfolio/openrecon/writeup.md"),
		imageSrc: require("./portfolio/openrecon/thumb.svg"),
		color: "#236396",
		resources: [resources.design, resources.bizdev, resources.dev],
		involvement: ["official"],
		externalInvolvement: ["client"],
		from: "early 2014",
		to: "late-2014"
	},
	wildfire: {
		name: "Wildfire",
		id: "wildfire",
		url: "http://wildfire.byimplication.com/",
		writeup: require("./portfolio/wildfire/writeup.md"),
		imageSrc: require("./portfolio/wildfire/thumb.svg"),
		color: "#d0011b",
		resources: [resources.design, resources.dev],
		involvement: ["official"],
		externalInvolvement: ["internal"],
		from: "early 2010",
		to: "late 2010"
	},
	sari: {
		name: "Sari Software",
		id: "sari",
		url: "http://sari.ph",
		writeup: require("./portfolio/sari/writeup.md"),
		imageSrc: require("./portfolio/sari/thumb.svg"),
		color: "#b3485d",
		resources: [resources.design, resources.bizdev, resources.dev],
		involvement: ["official"],
		externalInvolvement: ["client"],
		from: "late 2011",
		to: "present"
	},
	plotypus: {
		name: "Plotypus",
		id: "plotypus",
		url: "http://plotypus.levitanong.com/",
		imageSrc: require("./portfolio/plotypus/thumb.svg"),
		color: "#2c142b",
		resources: [resources.dev],
		involvement: ["unofficial"],
		externalInvolvement: ["internal"],
		from: "mid 2015",
		to: "present"
	},
	popeye: {
		name: "Popeye",
		id: "popeye",
		url: "http://popeye.levitanong.com/",
		imageSrc: require("./portfolio/popeye/thumb.svg"),
		color: "#fcbc4a",
		resources: [resources.dev],
		involvement: ["unofficial"],
		externalInvolvement: ["internal"],
		from: "mid 2015",
		to: "present"
	},
	torch: {
		name: "Torch",
		id: "torch",
		imageSrc: require("./portfolio/torch/thumb.svg"),
		color: "#82174b",
		resources: [resources.design, resources.dev],
		involvement: ["unofficial"],
		externalInvolvement: ["internal"],
		from: "early 2015",
		to: "present"
	}
};
