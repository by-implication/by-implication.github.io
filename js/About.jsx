import AboutStyle from "../css/About.css";

import React from 'react';
import _ from "lodash";
import PersonCard from "./PersonCard";
import people from "../data/people-data";

export default class About extends React.Component {
	render() {
		const personnel = _.sortBy(people, "nickname").map(person => {
			return <PersonCard key={ person.nickname } {...person}/>
		});

		return (
			<div className="view" id="About">
				<section id="TheCompany">
					<div className="writeup">
						<h2>The Company</h2>
						<p>By Implication is a software development firm based in Metro Manila.</p>
						<p>We care about making the world a better place, helping people understand that world, and solving the challenging problems it has to offer.</p>
					</div>
				</section>
				<section id="ThePeople">
					<div className="writeup">
						<h2>The People</h2>
						<p>Our people are some of the smartest, most talented, most valuable, most self-aggrandizing people we know.</p>
					</div>
					<div className="card-container People">
						{ personnel }
					</div>
				</section>
				<section id="Quote">
					<blockquote>
						Perfection is finally attained not when there is no longer anything to add, but when there is no longer anything to take away.
						<cite>-Antoine de Saint Exupéry</cite>
					</blockquote>
				</section>
			</div>
		);
	}
}
