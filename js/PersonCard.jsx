import PersonCardStyle from "../css/PersonCard.css";
import React from 'react';

export default class PersonCard extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="PersonCard">
				<img className="portrait" src={ this.props.imageSrc } alt={ "A nice photo of " + this.props.nickname + "." } title={ "A nice photo of " + this.props.nickname + "." } />
				<h4>
					{
						this.props.link
							? <a className="person-link" target="_blank" href={ this.props.link }>{ this.props.name }</a>
							: this.props.name
					}
				</h4>
				<h5>{ this.props.roles }</h5>
			</div>
		);
	}
}

PersonCard.propTypes = {
	name: React.PropTypes.string
}
