import React from 'react';
import PersonCard from "./PersonCard";

export default class About extends React.Component {
	render() {
		const people = [
			{
				nickname: "Levi",
				name: "Levi Tan Ong"
			},
			{
				nickname: "Phi",
				name: "Philip Cheang"
			},
			{
				nickname: "Rodz",
				name: "Rodrick Tan"
			},
			{
				nickname: "Ken",
				name: "Kenneth Yu"
			},
			{
				nickname: "Wil",
				name: "Wilhansen Li"
			},
			{
				nickname: "Pepe",
				name: "Pepe Bawagan"
			},
		].map(person => {
			return <PersonCard key={ person.nickname } {...person}/>
		});

		return (
			<div id="About">
				<section>
					<p>By Implication is a software development firm based in Metro Manila.</p>
					<p>We like making a difference in people's lives, in making information understandable.</p>
					<h2>We have awesome people.</h2>
				</section>
				<section className="card-container People">
					{ people }
				</section>
			</div>
		);
	}
}
