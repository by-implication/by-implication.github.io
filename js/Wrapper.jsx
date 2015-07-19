import MainStyles from "../css/Main.css";
import IconStyles from "../icons/style.css";

import React from "react/addons";
import _ from "lodash";
import Router, {RouteHandler} from "react-router";
import Toolbar from "./Toolbar";
const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
// import Prism from "./prism";

class Wrapper extends React.Component {
	constructor(props) {
		super(props);
	}
	meta(routeName) {
		switch(routeName) {
			case "storylark":
				return {
					description: "The best in digital indie comics",
					titleSuffix: " | Storylark"
					titlePrefix: "Storylark – Portfolio – "
				};
				break;
			case "openrecon":
				return {
					description: "Tracking taxpayer money spent on post-disaster reconstruction in the Philippines",
					titleSuffix: " | Open Reconstruction"
					titlePrefix: "Open Reconstruction – Portfolio – "
				};
				break;
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

		return (
			<html>
				<head>
					<title>{ title }</title>
					<meta charSet="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<meta name="copyright" content="Copyright, By Implication" />
					<meta name="author" content="By Implication" />
					<meta name="description" content={ meta.description } />
					<meta name="city" content="Manila, Philippines" />
					<meta name="geo.placename" content="Manila, Philippines" />
					<meta name="geo.region" content="PH-00" />
					<link href="//fonts.googleapis.com/css?family=Roboto:300,700,400" rel="stylesheet" type="text/css" />
					<link href="/bundle.css" rel='stylesheet' type='text/css' />
					<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&signed_in=true"></script>
				</head>
				<body>
					<Toolbar />
					<ReactCSSTransitionGroup component="main" transitionName="ViewTransition">
						<RouteHandler key={ this.context.router.getCurrentRoutes()[1].name } />
					</ReactCSSTransitionGroup>
					<footer>
						&copy; 2015 By Implication, Inc.
					</footer>
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
