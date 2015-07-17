import React from 'react';
import _ from "lodash";
import PersonCard from "./PersonCard";
import people from "../data/people-data";

export default class People extends React.Component {
	render() {
		const personnel = _.sortBy(people, "nickname").map(person => {
			return <PersonCard key={ person.nickname } {...person}/>
		});

		return (
			<div className="view" id="People">
				<div className="writeup">
					<p>Our people are some of the smartest, most talented, most valuable, most self-aggrandizing people we know.</p>
				</div>
				<div className="card-container People">
					{ personnel }
				</div>
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
