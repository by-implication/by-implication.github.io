import React from "react";
import Router, {DefaultRoute, Link, Route, RouteHandler} from "react-router";
import Index from "./Index";
import Portfolio from "./Portfolio";
import People from "./People";
import About from "./About";
import Wrapper from "./Wrapper";
import Project from "./Project";

var ga = require('react-ga');

const Routes = (
	<Route path="/" handler={ Wrapper }>
		<Route name="index" path="/" handler={ Index }>
			<Route name="people" path="/people/" handler={ People } />
			<Route name="about" path="/about/" handler={ About } />
			<Route name="portfolio" path="/" handler={ Portfolio } />
			<Route path="/portfolio/" handler={ Portfolio } />
			<DefaultRoute handler={ Portfolio } />
		</Route>
		<Route name="project" path="portfolio/:id/" handler={ Project } />
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

// gratuitous easter egg in console.

console.log("%cBy Implication", "padding: 0 20px 15px 20px; margin-top:-14px; margin-left: 85px; background: rgba(0,0,0,0.15); line-height: 90px; border-radius: 8px; text-shadow: 0px 1px 0px #c7c8ca, 0px 2px 0px #b1b3b6, 0px 3px 0px #9d9fa2, 0px 4px 0px #8a8c8e, 0px 5px 0px #77787b, 0px 6px 0px #636466, 0px 7px 0px #4d4d4f, 0px 8px 7px #001135; color: #fff; font-size: 40px; font-family: 'Helvetica Neue', Helvetica, Roboto, sans-serif; font-weight: bold;");
console.log('%c\n    ▂▟███   ███▙▂             %c We make %cmagic%c happen.  %c\n    ██         ██    \n  ▄▟██         ██▙▄   %c  Are you a designer, engineer, or artist who lives on the bleeding edge? %c\n  ▀▜██         ██▛▀      %c Come build amazing things with us, and change the world. 🚀  %c\n    ██         ██                                  \n    ▔▜███   ███▛▔             %c     ▶︎ %c http://work.byimplication.com \n                                                                     ', 'color: #9E2A2B; text-shadow: -11px -2px 0px rgba(120,20,20,0.1); line-height: 10px;', 'color: #335C67; line-height: 10px', 'color: rgb(68,105,133); background: -webkit-linear-gradient(rgb(99,199,231), rgb(68,105,133)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; text-shadow: 3px 3px 0px rgba(0,0,0, .2), 0px 0px 20px rgba(128,190,220, 1.0); font-weight: bold;', 'color: #335C67; line-height: 10px', 'color: #9E2A2B; text-shadow: 5px -9px 1px rgba(120,20,20,0.2); line-height: 10px;', 'color: #335C67; line-height: 10px', 'color: #9E2A2B; text-shadow: -9px 4px 5px rgba(120,20,20,0.2); line-height: 10px;','color: #335C67; line-height: 10px;','color: #9E2A2B; text-shadow: 5px 2px 0px rgba(120,20,20,0.2); line-height: 10px;','color: #335C67; line-height: 10px;', 'color: #955900; line-height: 10px;');


//   ▂▟███   ███▙▂
//   ██         ██
// ▄▟██         ██▙▄
// ▀▜██         ██▛▀
//   ██         ██
//   ▔▜███   ███▛▔
