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
		externalInvolvement: ["internal"]
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
		externalInvolvement: ["internal"]
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
		externalInvolvement: ["internal"]
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
		externalInvolvement: ["client"]
	},
	wildfire: {
		name: "Wildfire",
		id: "wildfire",
		imageSrc: require("./portfolio/wildfire/thumb.svg"),
		color: "#d0011b",
		resources: [resources.design, resources.dev],
		involvement: ["official"],
		externalInvolvement: ["internal"]
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
		externalInvolvement: ["client"]
	},
	plotypus: {
		name: "Plotypus",
		id: "plotypus",
		url: "http://plotypus.levitanong.com/",
		imageSrc: require("./portfolio/plotypus/thumb.svg"),
		color: "#2c142b",
		resources: [resources.design, resources.dev],
		involvement: ["unofficial"],
		externalInvolvement: ["internal"]
	},
	popeye: {
		name: "Popeye",
		id: "popeye",
		url: "http://plotypus.levitanong.com/",
		imageSrc: require("./portfolio/popeye/thumb.svg"),
		color: "#fcbc4a",
		resources: [resources.design, resources.dev],
		involvement: ["unofficial"],
		externalInvolvement: ["internal"]
	},
	torch: {
		name: "Torch",
		id: "torch",
		imageSrc: require("./portfolio/torch/thumb.svg"),
		color: "#82174b",
		resources: [resources.design, resources.dev],
		involvement: ["unofficial"],
		externalInvolvement: ["internal"]
	}
};
