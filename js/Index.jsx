import React from "react/addons";
import classnames from "classnames";
import ProjectCard from "./ProjectCard";
import {projectsData, clientsAndPartnersData} from "../data/portfolio-data";
import {resources, involvement} from "./enums";

const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

export default class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			resources: [],
			involvement: []
		}
	}
	setFilter(filterName, filterValue) {
		// if filterValue is inside this.state[filterName], remove it. otherwise, add it.
		this.setState({[filterName]: _.contains(this.state[filterName], filterValue) 
			? _.reject(this.state[filterName], v => v === filterValue) 
			: this.state[filterName].concat(filterValue)});
	}
	isFiltered(filterName, tags) {
		// console.log(filterName, tags);
		// returns a boolean
		// this.state[filterName] // list of all active filters.
		const truthValue = _.some(tags.map(t => _.contains(this.state[filterName], t)));
		return truthValue;
	}
	render() {
		const projects = projectsData
			.filter(p => !this.state.resources.length || this.isFiltered("resources", p.resources))
			.map(p => <ProjectCard key={ p.name } { ...p } />);
		return (
			<div className="Index">
				<section id="hero">
					{/*<span id="logo" className="icon-bi-logo" />
										<h1>We are <span id="logotype">By Implication</span>.</h1>*/}
					<div className="filter-group">
						{/* USE THESE AS FILTERS */}
						<p>
							We are a group of <span className={ classnames("filter", {active: _.contains(this.state.resources, resources.art)}) } onClick={ this.setFilter.bind(this, "resources", resources.art) }>artists</span>, computer scientists, <span className={ classnames({active: _.contains(this.state.resources, resources.design)}) } onClick={ this.setFilter.bind(this, "resources", resources.design) }>designers</span>, business analysts and <span className={ classnames({active: _.contains(this.state.resources, resources.softeng)}) } onClick={ this.setFilter.bind(this, "resources", resources.softeng) }>engineers</span>.
						</p>
						<p>
							We like building things, sometimes alone, sometimes together. Below is the collection of our work.
						</p>
					</div>
				</section>
				<ReactCSSTransitionGroup component="section" className="card-container" transitionName="projects">
					{ projects }
				</ReactCSSTransitionGroup>

				{/*<section>
									<p>
										We don't beat around the bush. We'll pour gasoline all over that bush and burn it. We'll tell you if your idea sucks, and how to unsuck it. We'll tell you if your deadline is out of whack, and how to unwhack it.
									</p>
								</section>
								<section>
									<p>
										You ever hear that thing they say about choosing two out of Speed, Affordability, and Quality? It's pretty spot on. Except we don't skimp out on Quality. So really, it's a choice between Speed and Affordability for us.
									</p>
								</section>
								<section>
									<p>
										What timezone did you say you were in? We don't care. We never sleep, so it doesn't matter to us what time you do. 
									</p>
								</section>
								<section>
									<p>
										Tired of Yes Men? Well, we don't know how you feel, because we avoid them like plague. We'll tell you things you don't want to hear, because damnit, we care.
									</p>
								</section>
								<section>
									<p>
										Your idea/process/business probably sucks. We can fix that for you. We've got programmers, mathematicians, business analysts and designers. We even have a chemist.
									</p>
								</section>*/}
			</div>
		)
	}
}