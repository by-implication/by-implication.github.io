import MainStyles from "../css/Main.css";
import IconStyles from "../icons/style.css";

import React from "react";
import Router, {RouteHandler} from "react-router";
import Toolbar from "./Toolbar";
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
					{/*<link rel="stylesheet" href="https://i.icomoon.io/public/c2f0d6ea16/ByImplication/style.css" />*/}
					<link href="/bundle.css" rel='stylesheet' type='text/css' />
				</head>
				<body>
					<Toolbar />
					<main>
						<RouteHandler />
					</main>
					<div>
						<h4>Perfection is finally attained not when there is no longer anything to add, but when there is no longer anything to take away.</h4>
						<p>-Antoine de Saint Exupéry</p>
					</div>
					<script src="/bundle.js" />
				</body>
			</html>
			
		)
	}
}

export default Wrapper;