import {resources, involvement} from "../js/enums";

export default {
	website: {
		name: "This Website",
		id: "website",
		url: "/",
		imageSrc: "/data/portfolio/website.svg",
		caseStudy: require("./portfolio-casestudy/website/casestudy.md"),
		headerImg: require("./portfolio-casestudy/website/header.png"),
		resources: [resources.design, resources.dev],
		involvement: ["official"],
		externalInvolvement: ["internal"]
	},
	storylark: {
		name: "Storylark",
		id: "storylark",
		url: "https://storylark.ph/",
		imageSrc: "/data/portfolio/storylark.png",
		resources: [resources.design, resources.bizdev, resources.dev],
		involvement: ["official"],
		externalInvolvement: ["internal"]
	},
	sakay: {
		name: "Sakay.ph",
		id: "sakay",
		url: "http://sakay.ph/",
		imageSrc: "/data/portfolio/sakayph.svg",
		resources: [resources.design, resources.bizdev, resources.dev],
		involvement: ["official"],
		externalInvolvement: ["internal"]
	},
	openrecon: {
		name: "Open Reconstruction",
		id: "openrecon",
		url: "http://openreconstruction.gov.ph/",
		imageSrc: "/data/portfolio/openrecon.svg",
		resources: [resources.design, resources.bizdev, resources.dev],
		involvement: ["official"],
		externalInvolvement: ["client"]
	},
	wildfire: {
		name: "Wildfire",
		id: "wildfire",
		imageSrc: "/data/portfolio/wildfire.svg",
		resources: [resources.design, resources.dev],
		involvement: ["official"],
		externalInvolvement: ["internal"]
	},
	sari: {
		name: "Sari",
		id: "sari",
		url: "http://sari.ph",
		imageSrc: "/data/portfolio/sari.svg",
		resources: [resources.design, resources.bizdev, resources.dev],
		involvement: ["official"],
		externalInvolvement: ["client", "partnership"]
	},
	plotypus: {
		name: "Plotypus",
		id: "plotypus",
		url: "http://plotypus.levitanong.com/",
		imageSrc: "/data/portfolio/plotypus.svg",
		resources: [resources.design, resources.dev],
		involvement: ["unofficial"],
		externalInvolvement: ["internal"]
	},
	popeye: {
		name: "Popeye",
		id: "popeye",
		url: "http://plotypus.levitanong.com/",
		imageSrc: "/data/portfolio/popeye.svg",
		resources: [resources.design, resources.dev],
		involvement: ["unofficial"],
		externalInvolvement: ["internal"]
	},
	torch: {
		name: "Torch",
		id: "torch",
		imageSrc: "/data/portfolio/torch.svg",
		resources: [resources.design, resources.dev],
		involvement: ["unofficial"],
		externalInvolvement: ["internal"]
	}
};