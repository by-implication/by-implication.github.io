import React from 'react';
import ProjectCard from "./ProjectCard";
import ClientAndPartnerCard from "./ClientAndPartnerCard";
import {projectsData, clientsAndPartnersData, secondDegreeData} from "../data/portfolio-data";

export default class Portfolio extends React.Component {
	render() {
		const projects = projectsData.map(p => <ProjectCard key={ p.name } { ...p } />);
		const clientsAndPartners = clientsAndPartnersData.map(c => <ClientAndPartnerCard key={ c.name } { ...c } />);
		const secondDegree = secondDegreeData.map(p => <ProjectCard key={ p.name } { ...p } />);
		return (
			<div className="Portfolio">
				<section>
					<h1>Clients And Partners</h1>
					<p>Our shit</p>
					<div className="card-container">
						{ clientsAndPartners }
					</div>
				</section>
				<section>
					<h1>Our Work</h1>
					<p>Our shit</p>
					<div className="card-container">
						{ projects }
					</div>
				</section>
				<section>
					<h1>The 2nd Degree</h1>
					<p>Work that individuals within By Implication have made.</p>
					<div className="card-container">
						{ secondDegree }
					</div>
				</section>
			</div>
		);
	}
}
