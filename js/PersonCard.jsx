import PersonCardStyle from "../scss/PersonCard.scss";
import React from 'react';

export default class PersonCard extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="PersonCard">
				<img src={`http://api.adorable.io/avatars/285/${this.props.nickname}%40adorable.io`} />
				<h3>{ this.props.name }</h3>
			</div>
		);
	}
}

PersonCard.propTypes = {
	name: React.PropTypes.string
}