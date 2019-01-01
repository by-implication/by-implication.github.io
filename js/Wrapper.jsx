import MainStyles from "../css/Main.css";
import IconStyles from "../icons/style.css";

import React from "react/addons";
import _ from "lodash";
import Router, {RouteHandler} from "react-router";
import Toolbar from "./Toolbar";
const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

class Wrapper extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		if (typeof window !== "undefined") {
			window.addEventListener('load', () => {
				const fastclick = require("fastclick");
			  fastclick.attach(document.body);
			});
		}
	}
	meta(routeName) {
		switch(routeName) {
			case "storylark":
				return {
					description: "The best in digital indie comics. Also cute birds. Hatched, By Implication.",
					titlePrefix: "Storylark – Portfolio – "
				};
			case "openrecon":
				return {
					description: "Tracking taxpayer money spent on post-disaster reconstruction in the Philippines.",
					titlePrefix: "Open Reconstruction – Portfolio – "
				};
			case "sakay":
				return {
					description: "Commuting made easy: Transit directions for jeepneys, buses, and trains in Metro Manila. Top 10 in Navigation on App Store + Google Play.",
					titlePrefix: "Sakay.ph – Portfolio – "
				};
			case "sari":
				return {
					description: "Sari Software is building apps for the bottom of the pyramid. We are providing a solid foundation for their design and technology.",
					titlePrefix: "Sari Software – Porfolio – "
				};
			case "about":
				return {
					description: "Learn how to stalk us. I mean, how to get in touch, where to find our office, who we’ve worked with, and what we stand for.",
					titlePrefix: "About – "
				};
			case "people":
				return {
					description: "Meet the beautiful faces behind our talented team. Or at least, some really good drawings of them.",
					titlePrefix: "People – "
				};
			default:
				return {
					description: "Award-winning independent software development + design firm from Manila, Philippines. Creators: Wildfire, Storylark, Sakay.ph, Open Reconstruction, and more.",
					titlePrefix: ""
				};
		}
	}
	render() {
		const routeName =
			this.context.router.getCurrentParams().id ||
			_.last(this.context.router.getCurrentRoutes()).name;

		const meta = this.meta(routeName);

		const title =  meta.titlePrefix + "By Implication";

		const domain = "https://byimplication.com";

		const ogPreview = <meta property="og:image" content={domain + require('../data/etc/fb-preview.png')} />

		return (
			<html>
				<head>
					<meta charSet="utf-8" />
					<title>{ title }</title>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<meta name="copyright" content="Copyright, By Implication" />
					<meta name="author" content="By Implication" />
					<meta name="description" content={ meta.description } />
					<meta name="city" content="Manila, Philippines" />
					{ (routeName === "portfolio") && ogPreview }
					<meta name="geo.placename" content="Manila, Philippines" />
					<meta name="geo.region" content="PH-00" />
					<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,700,400" />
					<link href="/bundle.css" rel='stylesheet' type='text/css' />
				</head>
				<body>
					<Toolbar />
					<ReactCSSTransitionGroup component="main" transitionName="ViewTransition" transitionEnterTimeout={400} transitionLeaveTimeout={400}>
						<RouteHandler key={ this.context.router.getCurrentRoutes()[1].name } />
					</ReactCSSTransitionGroup>
					<footer>
						&copy; 2019 By Implication, Inc.
					</footer>
					<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&signed_in=true"></script>
					<script src="/bundle.js" />
				</body>
			</html>

		)
	}
}
// some kind of undocumented react magic. context is a way of sharing data between components with the same required context.
Wrapper.contextTypes = {
  router: React.PropTypes.func.isRequired
}

export default Wrapper;
