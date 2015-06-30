import React from 'react';

export default class PersonCard extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				{ this.props.name }
			</div>
		);
	}
}

PersonCard.propTypes = {
	name: React.PropTypes.string
}