import ButtonStyles from "../scss/Buttons.scss";
import classnames from "classnames";
import React from 'react';
import _ from "lodash";

export class IconButton extends React.Component {
	render() {
		return (
			<button {...this.props} className={ classnames("IconButton", "TouchTarget", this.props.className) }>
				<div className="Button">
					{ this.props.children }
				</div>
			</button>
		);
	}
}

export class TextButton extends React.Component {
	render() {	
		// console.log(_.assign(_.clone(this.props), {className: classnames("TextButton", "TouchTarget", this.props.className)}));
		const button = (
			<div className="Button">
				{ this.props.children }
			</div>
		);
		return React.createElement(
			(this.props.component || "button"), 
			_.assign(_.clone(this.props), {className: classnames("TextButton", "TouchTarget", this.props.className)}),
			button
		);
	}
}
