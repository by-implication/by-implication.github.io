import React from 'react';
import PersonCard from "./PersonCard";
import people from "../data/people-data";

export default class About extends React.Component {
	render() {
		const personnel = people.map(person => {
			return <PersonCard key={ person.nickname } {...person}/>
		});

		return (
			<div id="About">
				<section id="TheCompany">
					<h2>The Company</h2>
					<p>By Implication is a software development firm based in Metro Manila.</p>
					<p>We care about making the world a better place, helping people understand that world, and solving the challenging problems it has to offer.</p>
				</section>
				<section id="ThePeople">
					<h2>The People</h2>
					<p>Our people are some of the smartest, most talented, most valuable, most self-aggrandizing people we know.</p>
					<div className="card-container People">
						{ personnel }
					</div>
				</section>
			</div>
		);
	}
}
