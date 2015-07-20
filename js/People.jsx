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
			<div id="People">
				<div className="writeup">
					<p>Our people are some of the smartest, most talented, most valuable, and most self-aggrandizing people we know.</p>
					<p>
						Individually, our people feature in newspapers and magazines, speak in conferences local and abroad, teach at universities, win awards, and organize movements.
					</p>
					<p>
						Together, we play games, make bad jokes, and goof off a lot. Along the way, we manage to build beautiful and efficient things, and have some fun too.
					</p>
				</div>
				<div className="card-container People">
					{ personnel }
				</div>
				<section id="hiring">
					<div>
						<h3>Interested in joining us?</h3>
						<p title="parang relationship lang. chos!">
							We’re not looking for anyone right now, but you’re welcome to change our minds.
						</p>
						<p>
							If you feel you have what it takes, visit <a href="http://work.byimplication.com">work.byimplication.com</a> for employment or internship opportunities. We’d love to hear from you!
						</p>
					</div>
				</section>
			</div>
		);
	}
}
