import React from "react";
import Router, {DefaultRoute, Link, Route, RouteHandler} from "react-router";
import Index from "./Index";
import Portfolio from "./Portfolio";
import People from "./People";
import About from "./About";
import Wrapper from "./Wrapper";
import CaseStudy from "./CaseStudy";

var ga = require('react-ga');

const Routes = (
	<Route path="/" handler={ Wrapper }>
		<Route name="index" path="/" handler={ Index }>
			<Route name="people" path="/people/" handler={ People } />
			<Route name="about" path="/about/" handler={ About } />
			<DefaultRoute name="portfolio" handler={ Portfolio } />
		</Route>
		<Route name="caseStudy" path="portfolio/:id/" handler={ CaseStudy } />
		{/*<DefaultRoute name="index" handler={ Index } />*/}
	</Route>
)

if (typeof document !== "undefined") {
	ga.initialize('UA-17669165-1');
	Router.run(Routes, Router.HistoryLocation, Handler => {
		ga.pageview(Router.HistoryLocation.getCurrentPath());
		React.render(<Handler />, document);
	})
}

export default function render (locals, callback) {
	Router.run(Routes, locals.path, Handler => {
		let html = React.renderToString(<Handler />);
    callback(null, "<!DOCTYPE html>" + html);
  });
}
