import classnames from "classnames";
import _ from "lodash";
import ProjectCardStyles from "../css/ProjectCard.css";
import React from 'react';
import chroma from "chroma-js";
import {Link} from "react-router";

export default class ProjectCard extends React.Component {
	render() {
		return (
			<Link className={ classnames("ProjectCard", this.props.className) } to="caseStudy" params={_.pick(this.props, "id")}>
				{
					this.props.imageSrc && (
						<div className="image" style={ {backgroundImage: `url(${this.props.imageSrc})`} } />)
				}
				<div className="overlay">
					<div className="more" >
						<h3>See More</h3>
					</div>
				</div>

			</Link>
		);
	}
}

ProjectCard.propTypes = {
	name: React.PropTypes.string,
	url: React.PropTypes.string
}
