import ProjectCardStyles from "../scss/ProjectCard.scss";
import React from 'react';

export default class ProjectCard extends React.Component {
	render() {
		return (
			<div className="ProjectCard">
				{
					this.props.imageSrc && <img src={ this.props.imageSrc } />
				}
				<div className="info">
					<h3>{ this.props.name }</h3>
					<a href={ this.props.url }>
						Site
					</a>
					<p>
						{ this.props.description }
					</p>
				</div>
			</div>
		);
	}
}

ProjectCard.propTypes = {
	name: React.PropTypes.string,
	url: React.PropTypes.string
}
