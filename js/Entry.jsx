import React from "react";
import Router, {DefaultRoute, Link, Route, RouteHandler} from "react-router";
import Index from "./Index";
import People from "./People";
import About from "./About";
import Wrapper from "./Wrapper";
import CaseStudy from "./CaseStudy";

const Routes = (
	<Route path="/" handler={ Wrapper }>
		<Route name="people" path="people/" handler={ People } />
		<Route name="about" path="about/" handler={ About } />
		<Route name="portfolio" path="portfolio/" handler={ Index } />
		<Route name="caseStudy" path="portfolio/:id/" handler={ CaseStudy } />
		<DefaultRoute name="index" handler={ Index } />
	</Route>
)

if (typeof document !== "undefined") {
	Router.run(Routes, Router.HistoryLocation, Handler => {
		React.render(<Handler />, document);
	})
}

export default function render (locals, callback) {
	Router.run(Routes, locals.path, Handler => {
		let html = React.renderToString(<Handler />);
    callback(null, "<!DOCTYPE html>" + html);
  });
}