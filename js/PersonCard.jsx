import PersonCardStyle from "../css/PersonCard.css";
import React from 'react';

export default class PersonCard extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="PersonCard">
				<img src={`http://api.adorable.io/avatars/192/${this.props.nickname}%40adorable.io`} />
				<h4>{ this.props.name }</h4>
				<h5>{ this.props.roles }</h5>
			</div>
		);
	}
}

PersonCard.propTypes = {
	name: React.PropTypes.string
}