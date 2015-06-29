import ButtonStyles from "../scss/Buttons.scss";
import React from 'react';

export class IconButton extends React.Component {
	render() {
		return (
			<button className="IconButton TouchTarget">
				<div className="Button">
					{ this.props.children }
				</div>
			</button>
		);
	}
}

export class TextButton extends React.Component {
	render() {
		return (
			<button className="TextButton TouchTarget">
				<div className="Button">
					{ this.props.children }
				</div>
			</button>
		);
	}
}
