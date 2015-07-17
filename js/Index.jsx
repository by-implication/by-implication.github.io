import React from "react";
import _ from "lodash";
import classnames from "classnames";
import ProjectCard from "./ProjectCard";
import projectsData from "../data/portfolio-data";
import enums, {resources, involvement, externalInvolvement} from "./enums";

// import websitemd from "../data/portfolio-md/website/writeup.md";

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
	// static willTransitionTo(transition, params, query, callback) {
	// 	console.log(params);
	// }
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
		const projects = _.map(projectsData, p => <ProjectCard className={classnames({dimmed: !this.isFiltered(p)})} key={ p.name } { ...p } />);

		const Filter = function(filterSetName, filterName) {
			const nameDict = {
				"design": "designers",
				"dev": "developers",
				"bizdev": "business analysts",
				"unofficial": "on our own",
				"official": "together",
				"internal": "ourselves",
				"client": "clients"
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
			<div className="view" id="Index">
					<div className="filter-group">
						<p>
							We are a group of { ResFilter("design") }, { ResFilter("dev") }, and { ResFilter("bizdev") }.
						</p>
						<p>
							We like building things { InvFilter("unofficial") } and { InvFilter("official") }. 
						</p>
						<p>
							Mostly, we build for { XInvFilter("internal") }, but we build for { XInvFilter("client") } too. 
						</p>
					</div>

				<div className="card-container">
					{ projects }
				</div>
			</div>
		)
	}
}