import ToolbarStyle from "../css/Toolbar.css";

import React from "react";
import classnames from "classnames";
import {Link} from "react-router";

import {IconButton, TextButton} from "./Buttons";

export default class Toolbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			scrollTop: 0
		};

		this.componentDidMount = this.componentDidMount.bind(this);
		this.componentWillUnmount = this.componentWillUnmount.bind(this);
		this.scrollHandler = this.scrollHandler.bind(this);
	}
	componentDidMount() {
		window.addEventListener("scroll", this.scrollHandler);
	}
	componentWillUnmount() {
		window.removeEventListener("scroll", this.scrollHandler);
	}
	scrollHandler(e) {
		if (document) {
			this.setState({scrollTop: document.body.scrollTop});
		}
	}
	render() {
		return (
			<header id="main-toolbar" className={ classnames("Toolbar", {scrolled: this.state.scrollTop >= 8}) }>
				<TextButton component={ Link } to="people">
					People
				</TextButton>
				<IconButton component={ Link } id="logobutton" to="index">
					<span id="logo" className="icon-bi-logo" />
				</IconButton>
				<TextButton component={ Link } to="about">
					About
				</TextButton>
			</header>
		)
	}
}