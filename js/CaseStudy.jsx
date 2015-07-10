import CaseStudyStyles from "../css/CaseStudy.css";

import React from 'react';
import classnames from "classnames";
import portfolioData from "../data/portfolio-data";

export default class CaseStudy extends React.Component {
	componentDidMount() {
	}
	render() {
		const data = portfolioData[this.props.params.id];

		const defaultWriteup = (
			<article>
				<h1>{ data.name }</h1>
				<p>We're currently writing up the writeup for this project. In the meantime, have a look at the screenshots below!</p>
			</article>
		)

		return (
			<div className="CaseStudy">
				<div 
					className={ classnames("headerimg", !data.headerImg && "placeholder") } 
					style={{backgroundImage: `url(${data.headerImg || data.imageSrc})`}} />
				
				<div className="content">
					<aside className="meta">
						<dl>
							<dt>Author</dt>
							<dd>Levi Tan Ong</dd>
							<dt>Date</dt>
							<dd>July 6, 2015</dd>
							<dt>Resources</dt>
							<dd>{ data.resources.join(", ") }</dd>
						</dl>
					</aside>
					{ 
						data.caseStudy
							? <article dangerouslySetInnerHTML={ {__html: data.caseStudy } }/> 
							: defaultWriteup
					}
				</div>
			</div>
		);
	}
}
