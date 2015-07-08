import CaseStudyStyles from "../css/CaseStudy.css";

import React from 'react';
import portfolioData from "../data/portfolio-data";

export default class CaseStudy extends React.Component {
	componentDidMount() {
		const id = this.props.params.id; 
		this.setState({
			id: id, 
			writeup: portfolioData[id].caseStudy,
			resources: portfolioData[id].resources,
			headerImg: portfolioData[id].headerImg || ""
		});
	}
	render() {
		return (
			<div className="CaseStudy">
				<img className="headerimg" src={ this.state && this.state.headerImg } />
				<div className="content">
					<aside className="meta">
						<dl>
							<dt>Author</dt>
							<dd>Levi Tan Ong</dd>
							<dt>Date</dt>
							<dd>July 6, 2015</dd>
							<dt>Resources</dt>
							<dd>{ this.state && this.state.resources.join(", ") }</dd>
						</dl>
					</aside>
					{ this.state && <article dangerouslySetInnerHTML={ {__html: this.state.writeup } }/> }
				</div>
			</div>
		);
	}
}
