import ProjectCardStyles from "../css/ProjectCard.css";
import React from 'react';
import chroma from "chroma-js";

export default class ProjectCard extends React.Component {
	render() {
		return (
			<div className="ProjectCard">
				{
					this.props.imageSrc && (
						<div className="image" style={ {backgroundImage: `url(${this.props.imageSrc})`} } />)
				}
				<div className="overlay">
					<div className="more">
						<h3>See More</h3>
					</div>
				</div>

			</div>
		);
	}
}

ProjectCard.propTypes = {
	name: React.PropTypes.string,
	url: React.PropTypes.string
}
