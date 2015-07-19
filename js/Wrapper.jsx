import MainStyles from "../css/Main.css";
import IconStyles from "../icons/style.css";

import React from "react/addons";
import Router, {RouteHandler} from "react-router";
import Toolbar from "./Toolbar";
const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
// import Prism from "./prism";

class Wrapper extends React.Component {

	render() {
		console.log(this.context.router.getCurrentPath(), this.context.router.getCurrentRoutes());
		return (
			<html>
				<head>
					<meta charSet="utf-8" />
					<title>By Implication</title>
					<!-- TODO: change dynamically -->
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<meta name="copyright" content="Copyright, By Implication">
					<meta name="author" content="Levi Tan Ong, Philip Cheang, Monica Esquivel, by Implication">
					<meta name="description" content="Award-winning independent software development + design firm from Manila, Philippines. Creators: Wildfire, Storylark, Sakay.ph, Open Reconstruction, and more.">
					<!-- TODO: change per page -->
					<meta name="city" content="Manila, Philippines">
					<meta name="geo.placename" content="Manila, Philippines">
					<meta name="geo.region" content="PH-00">
					<link href='http://fonts.googleapis.com/css?family=Roboto:300,700,400' rel='stylesheet' type='text/css' />
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
