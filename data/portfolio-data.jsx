import {resources, involvement} from "../js/enums";

export const projectsData = [
	{
		name: "This Website",
		id: "website",
		url: "/",
		imageSrc: "/data/portfolio/website.svg",
		caseStudySrc: "/data/portfolio-casestudy/website/casestudy.md",
		resources: [resources.design, resources.dev],
		involvement: ["official"],
		externalInvolvement: ["internal"]
	},
	{
		name: "Storylark",
		id: "storylark",
		url: "https://storylark.ph/",
		imageSrc: "/data/portfolio/storylark.png",
		resources: [resources.design, resources.bizdev, resources.dev],
		involvement: ["official"],
		externalInvolvement: ["internal"]
	},
	{
		name: "Sakay.ph",
		id: "sakay",
		url: "http://sakay.ph/",
		imageSrc: "/data/portfolio/sakayph.svg",
		resources: [resources.design, resources.bizdev, resources.dev],
		involvement: ["official"],
		externalInvolvement: ["internal"]
	},
	{
		name: "Open Reconstruction",
		id: "openrecon",
		url: "http://openreconstruction.gov.ph/",
		imageSrc: "/data/portfolio/openrecon.svg",
		resources: [resources.design, resources.bizdev, resources.dev],
		involvement: ["official"],
		externalInvolvement: ["client"]
	},
	{
		name: "Wildfire",
		id: "wildfire",
		imageSrc: "/data/portfolio/wildfire.svg",
		resources: [resources.design, resources.dev],
		involvement: ["official"],
		externalInvolvement: ["internal"]
	},
	{
		name: "Sari",
		id: "sari",
		url: "http://sari.ph",
		imageSrc: "/data/portfolio/sari.svg",
		resources: [resources.design, resources.bizdev, resources.dev],
		involvement: ["official"],
		externalInvolvement: ["client", "partnership"]
	},
	{
		name: "Plotypus",
		id: "plotypus",
		url: "http://plotypus.levitanong.com/",
		imageSrc: "/data/portfolio/plotypus.svg",
		resources: [resources.design, resources.dev],
		involvement: ["unofficial"],
		externalInvolvement: ["internal"]
	},
	{
		name: "Popeye",
		id: "popeye",
		url: "http://plotypus.levitanong.com/",
		imageSrc: "/data/portfolio/popeye.svg",
		resources: [resources.design, resources.dev],
		involvement: ["unofficial"],
		externalInvolvement: ["internal"]
	},
	{
		name: "Torch",
		id: "torch",
		imageSrc: "/data/portfolio/torch.svg",
		resources: [resources.design, resources.dev],
		involvement: ["unofficial"],
		externalInvolvement: ["internal"]
	}
];

export const clientsAndPartnersData = [
	{
		name: "Department of Budget and Management",
		url: "http://www.dbm.gov.ph/",
		imageSrc: "/data/portfolio/DBM.png"
	}
];