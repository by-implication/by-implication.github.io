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
					<h1>The Company</h1>
					<p>By Implication is a software development firm based in Metro Manila.</p>
					<p>We like making a difference in people's lives, making information understandable, and solving challenging problems.</p>
				</section>
				<section id="ThePeople">
					<h1>The People</h1>
					<p>Our people are some of the smartest, most talented, most arrogant sons of bitches we know. They're also weird.</p>
					<div className="card-container People">
						{ personnel }
					</div>
				</section>
			</div>
		);
	}
}
