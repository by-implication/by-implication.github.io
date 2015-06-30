import React from "react";
import Router, {DefaultRoute, Link, Route, RouteHandler} from "react-router";
import Index from "./Index";
import People from "./People";
import Portfolio from "./Portfolio";
import Wrapper from "./Wrapper";

let Routes = (
	<Route path="/" handler={ Wrapper }>
		<Route name="people" path="people/" handler={ People } />
		<Route name="portfolio" path="portfolio/" handler={ Portfolio } />
		<DefaultRoute name="index" handler={ Index } />
	</Route>
)

let PopeyeRouter = Router.create({
	routes: Routes
});

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