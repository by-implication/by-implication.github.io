import React from "react";
import ProjectCard from "./ProjectCard";
import {projectsData, clientsAndPartnersData} from "../data/portfolio-data";

export default class Index extends React.Component {
	render() {
		const projects = projectsData.map(p => <ProjectCard key={ p.name } { ...p } />);
		return (
			<div className="Index">
				<section id="hero">
					<span id="logo" className="icon-bi-logo" />
					<h1>We are <span>By Implication</span>.</h1>
					<p>
						We are a group of artists, computer scientists, mathematicians, designers, business analysts and engineers. <br/> We like building things, sometimes alone, sometimes together. Below is the collection of our works.
					</p>
				</section>
				<section className="card-container">
					{ projects }
				</section>

				<section>
					<p>
						We don't beat around the bush. We'll pour gasoline all over that bush and burn it. We'll tell you if your idea sucks, and how to unsuck it. We'll tell you if your deadline is out of whack, and how to unwhack it.
					</p>
				</section>
				<section>
					<p>
						You ever hear that thing they say about choosing two out of Speed, Affordability, and Quality? It's pretty spot on. Except we don't skimp out on Quality. So really, it's a choice between Speed and Affordability for us.
					</p>
				</section>
				<section>
					<p>
						What timezone did you say you were in? We don't care. We never sleep, so it doesn't matter to us what time you do. 
					</p>
				</section>
				<section>
					<p>
						Tired of Yes Men? Well, we don't know how you feel, because we avoid them like plague. We'll tell you things you don't want to hear, because damnit, we care.
					</p>
				</section>
				<section>
					<p>
						Your idea/process/business probably sucks. We can fix that for you. We've got programmers, mathematicians, business analysts and designers. We even have a chemist.
					</p>
				</section>
			</div>
		)
	}
}