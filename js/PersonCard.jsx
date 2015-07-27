import PersonCardStyle from "../css/PersonCard.css";
import React from 'react';


export default class PersonCard extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		var personContent;
		if (this.props.link) {
			return (
				<a href={ this.props.link } className="PersonCard">
					<img className="portrait" src={ this.props.imageSrc } alt={ "A nice photo of " + this.props.nickname + "." } title={ "A nice photo of " + this.props.nickname + "." } />
					<h4>
						<span className="person-link">
						{ this.props.name }
						</span>
					</h4>
					<h5>{ this.props.roles }</h5>
				</a>
			);
		} else {
			return (
				<div className="PersonCard">
					<img className="portrait" src={ this.props.imageSrc } alt={ "A nice photo of " + this.props.nickname + "." } title={ "A nice photo of " + this.props.nickname + "." } />
					<h4>
						{ this.props.name	}
					</h4>
					<h5>{ this.props.roles }</h5>
				</div>
			);
		}
	}
}

PersonCard.propTypes = {
	name: React.PropTypes.string
};
