import React from 'react';
import PersonCard from "./PersonCard";

export default class People extends React.Component {
	render() {
		const people = [
			"Person McPerson"
		].map(name => {
			return <PersonCard name={ name } />
		});

		return (
			<div>
				<h2>We have awesome people.</h2>
				{ people }
			</div>
		);
	}
}
