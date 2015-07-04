import React from "react";
import Router, {DefaultRoute, Link, Route, RouteHandler} from "react-router";
import Index from "./Index";
import About from "./About";
import Wrapper from "./Wrapper";

let Routes = (
	<Route path="/" handler={ Wrapper }>
		<Route name="about" path="about/" handler={ About } />
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