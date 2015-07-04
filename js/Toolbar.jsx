import ToolbarStyle from "../scss/Toolbar.scss";

import React from "react";
import {Link} from "react-router";

import {IconButton, TextButton} from "./Buttons";

export default class Toolbar extends React.Component {
	render() {
		return (
			<header className="Toolbar">
				<TextButton component={ Link } to="about">
					About
				</TextButton>
				<IconButton component={ Link } id="logobutton" to="index">
					<span id="logo" className="icon-bi-logo" />
				</IconButton>
				<TextButton component={ Link } to="contact">
					Contact
				</TextButton>
			</header>
		)
	}
}