import ToolbarStyle from "../scss/Toolbar.scss";

import React from "react";
import {Link} from "react-router";

import {IconButton, TextButton} from "./Buttons";

export default class Toolbar extends React.Component {
	render() {
		return (
			<header className="Toolbar">
				<span id="logo" className="icon-bi-logo" />
				<span>By Implication</span>
				<div className="spacer" />
				<TextButton component={ Link } to="index">
					Home
				</TextButton>
				<TextButton component={ Link } to="about">
					About
				</TextButton>
			</header>
		)
	}
}