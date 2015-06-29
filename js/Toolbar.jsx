import ToolbarStyle from "../scss/Toolbar.scss";

import React from "react";
import {Link} from "react-router";

import {IconButton, TextButton} from "./Buttons";

export default class Toolbar extends React.Component {
	render() {
		return (
			<header className="Toolbar">
				<TextButton component={ Link } to="index">
					Portfolio
				</TextButton>
				<TextButton component={ Link } to="people">
					People
				</TextButton>
			</header>
		)
	}
}