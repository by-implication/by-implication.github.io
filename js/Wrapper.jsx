import MainStyles from "../css/Main.css";
import IconStyles from "../icons/style.css";

import React from "react/addons";
import Router, {RouteHandler} from "react-router";
import Toolbar from "./Toolbar";
const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
// import Prism from "./prism";

class Wrapper extends React.Component {
	
	render() {
		return (
			<html>
				<head>
					<title>By Implication</title>
					<meta charSet="utf-8" /> 
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link href='http://fonts.googleapis.com/css?family=Roboto:300,700,400' rel='stylesheet' type='text/css' />
					<link href="/bundle.css" rel='stylesheet' type='text/css' />
					<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&signed_in=true"></script>
				</head>
				<body>
					<Toolbar />
					<main>
						<div id="hero">
							<h1>We are By Implication.</h1>
						</div>
						<ReactCSSTransitionGroup component="div" transitionName="ViewTransition">
							<RouteHandler key={ this.context.router.getCurrentPath() } />
						</ReactCSSTransitionGroup>
					</main>
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