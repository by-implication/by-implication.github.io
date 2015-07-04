import {resources, involvement} from "../js/enums";

export const projectsData = [
	{
		name: "Sakay.ph",
		url: "http://sakay.ph/",
		imageSrc: "/data/portfolio/sakayph.svg",
		resources: [resources.design, resources.bizdev, resources.dev],
		involvement: ["official"],
		externalInvolvement: ["internal"]
	},
	{
		name: "Storylark",
		url: "https://storylark.ph/",
		imageSrc: "/data/portfolio/storylark.png",
		resources: [resources.design, resources.bizdev, resources.dev],
		involvement: ["official"],
		externalInvolvement: ["internal"]
	},
	{
		name: "Open Reconstruction",
		url: "http://openreconstruction.gov.ph/",
		imageSrc: "/data/portfolio/openrecon.svg",
		resources: [resources.design, resources.bizdev, resources.dev],
		involvement: ["official"],
		externalInvolvement: ["client"]
	},
	{
		name: "Wildfire",
		imageSrc: "/data/portfolio/wildfire.svg",
		resources: [resources.design, resources.dev],
		involvement: ["official"],
		externalInvolvement: ["internal"]
	},
	{
		name: "Sari",
		url: "http://sari.ph",
		imageSrc: "/data/portfolio/sari.svg",
		resources: [resources.design, resources.bizdev, resources.dev],
		involvement: ["official"],
		externalInvolvement: ["client", "partnership"]
	},
	{
		name: "Plotypus",
		url: "http://plotypus.levitanong.com/",
		imageSrc: "/data/portfolio/plotypus.svg",
		resources: [resources.design, resources.dev],
		involvement: ["unofficial"],
		externalInvolvement: ["internal"]
	},
	{
		name: "Popeye",
		url: "http://plotypus.levitanong.com/",
		imageSrc: "/data/portfolio/popeye.svg",
		resources: [resources.design, resources.dev],
		involvement: ["unofficial"],
		externalInvolvement: ["internal"]
	},
	{
		name: "Torch",
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