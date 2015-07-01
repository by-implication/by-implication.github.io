import React from 'react';

export default class ClientAndPartnerCard extends React.Component {
	render() {
		return (
			<div className="ClientAndPartnerCard">
				<div className="image">
					<img src={ this.props.imageSrc } />
				</div>
			</div>
		);
	}
}

ClientAndPartnerCard.propTypes = {
	name: React.PropTypes.string,
	url: React.PropTypes.string
}
