import React from "react/addons";
import _ from "lodash";
import classnames from "classnames";
import ProjectCard from "./ProjectCard";
import {projectsData, clientsAndPartnersData} from "../data/portfolio-data";
import enums, {resources, involvement, externalInvolvement} from "./enums";

const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

const someSubset = function(superset, subset) {
	return _.some(subset.map(se => {
		return _.contains(superset, se);
	}))
}
_.mixin({"someSubset": someSubset});

export default class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			resources: [],
			involvement: [],
			externalInvolvement: []
		}
	}
	setFilter(filterName, filterValue) {
		// if filterValue is inside this.state[filterName], remove it. otherwise, add it.
		this.setState({[filterName]: _.contains(this.state[filterName], filterValue) 
			? _.reject(this.state[filterName], v => v === filterValue) 
			: this.state[filterName].concat(filterValue)});
	}
	isFiltered(project) {
		const filterNames = ["resources", "involvement", "externalInvolvement"];
		return _.all(filterNames.map(f => {
			return _.someSubset(project[f], this.state[f]) || !this.state[f].length;
		}));
	}
	render() {
		const projects = projectsData
			.filter(p => this.isFiltered(p))
			.map(p => <ProjectCard key={ p.name } { ...p } />);

		const Filter = function(filterSetName, filterName) {
			const nameDict = {
				"art": "artists",
				"compsci": "computer scientists",
				"design": "designers",
				"bizdev": "business analysts",
				"softeng": "software engineers",
				"unofficial": "play",
				"official": "work",
				"internal": "ourselves",
				"client": "clients",
				"partnership": "partners"
			}
			return (
				<span 
					className={ classnames("filter", {active: _.contains(this.state[filterSetName], enums[filterSetName][filterName])}) } 
					onClick={ this.setFilter.bind(this, filterSetName, enums[filterSetName][filterName]) }>
					{ nameDict[filterName] }
				</span>
			);
		}

		const ResFilter = Filter.bind(this, "resources");
		const InvFilter = Filter.bind(this, "involvement");
		const XInvFilter = Filter.bind(this, "externalInvolvement");

		return (
			<div className="Index">
				<section id="hero">
					{/*<span id="logo" className="icon-bi-logo" />
										<h1>We are <span id="logotype">By Implication</span>.</h1>*/}
					<div className="filter-group">
						<p>
							We are a group of { ResFilter("art") } { ResFilter("compsci") } { ResFilter("design") } { ResFilter("bizdev") } and { ResFilter("softeng") }.
						</p>
						<p>
							We like building things—whether for { InvFilter("official") } or for { InvFilter("unofficial") }. 
						</p>
						<p>
							Mostly, we build for { XInvFilter("internal") }, but sometimes we build for { XInvFilter("client") } and { XInvFilter("partnership") }. 
						</p>
					</div>
				</section>
				<ReactCSSTransitionGroup component="section" className="card-container" transitionName="projects">
					{ projects }
				</ReactCSSTransitionGroup>
			</div>
		)
	}
}