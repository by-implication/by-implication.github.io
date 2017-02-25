import React from "react/addons";
import _ from "lodash";
import classnames from "classnames";
import ProjectCard from "./ProjectCard";
import projectsData from "../data/portfolio-data";
import Router, {RouteHandler} from "react-router";
import enums, {resources, involvement, externalInvolvement} from "./enums";
const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

export default class Index extends React.Component {
	render() {
		return (
			<div className="view" id="Index">
				<div id="hero">
					<h1>We are <em>By Implication.</em></h1>
				</div>
				<ReactCSSTransitionGroup component="div" transitionName="ViewTransition" transitionEnterTimeout={400} transitionLeaveTimeout={400}>
					<RouteHandler key={ this.context.router.getCurrentPath() }/>
				</ReactCSSTransitionGroup>
			</div>
		)
	}
}

Index.contextTypes = {
  router: React.PropTypes.func.isRequired
}
