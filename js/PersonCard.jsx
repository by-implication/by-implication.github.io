import PersonCardStyle from "../css/PersonCard.css";
import React from 'react';
import classnames from "classnames";


export default class PersonCard extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		var personContent;
		const cardContent = (
			<div className="cardContent">
				<img className="portrait" src={ this.props.imageSrc } alt={ "A nice photo of " + this.props.nickname + "." } title={ "A nice photo of " + this.props.nickname + "." } />
				<h4>
					<span className={ classnames({"person-link": this.props.link}) }>
					{ this.props.name }
					</span>
				</h4>
				<h5>{ this.props.roles }</h5>
			</div>
		);
		let cardProps = {className: "PersonCard"};
		if (this.props.link) { cardProps.href = this.props.link };
		const Card = React.createElement(
			this.props.link ? "a" : "div",
			cardProps,
			[
				cardContent
			]
		);
		return Card;
	}
}

PersonCard.propTypes = {
	name: React.PropTypes.string
};
