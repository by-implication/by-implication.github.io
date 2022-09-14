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
			<header>
				<div style={{backgroundColor: "#FB687D", position: 'fixed', width: '100%', top: '0', height: '3em', textAlign: 'center', zIndex: '10', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><span>By Implication is now </span><a href="https://bonitotech.com" style={{ paddingLeft: '0.25em', color: 'white' }}>Bonito Tech<img src={require('../icons/bonito-logo-white.svg')} style={{ height: '1.5em', verticalAlign: 'top', paddingLeft: '5px' }} /></a></div>
				<nav id="main-toolbar" style={{top: '3em'}} className={ classnames("Toolbar", {scrolled: this.state.scrollTop >= 8}) }>
					<TextButton component={ Link } to="about">
						About
					</TextButton>
					<IconButton component={ Link } id="logobutton" to="portfolio">
						<span id="logo" className="icon-bi-logo" />
						<span id="logo-seo">Home and Portfolio</span>
					</IconButton>
					<TextButton component={ Link } to="people">
						People
					</TextButton>
				</nav>
			</header>
		)
	}
}
