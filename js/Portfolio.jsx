import React from 'react';
import ProjectCard from "./ProjectCard";
import {projectsData} from "../data/portfolio-data";

export default class Portfolio extends React.Component {
	render() {
		const projects = projectsData
		.map(p => <ProjectCard key={p.name} { ...p } />);

		return (
			<div className="Portfolio">
				<section>
					<h1>Portfolio</h1>
					<p>Our shit</p>
					<div className="card-container">
						{ projects }
					</div>
				</section>
				<section>
					<h1>The 2nd Degree</h1>
					<p>Work that individuals within By Implication have made.</p>
				</section>
			</div>
		);
	}
}
