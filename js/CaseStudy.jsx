import CaseStudyStyles from "../css/CaseStudy.css";

import React from 'react';
import classnames from "classnames";
import portfolioData from "../data/portfolio-data";
import Modal from "./Modal";
import {TextButton} from "./Buttons";

export default class CaseStudy extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			images: [],
			imageModalOpened: false
		}
		this.toggleImageModal = this.toggleImageModal.bind(this);
	}
	toggleImageModal() {
		this.setState({imageModalOpened: !this.state.imageModalOpened});
	}
	componentDidMount() {	
		const context = require.context("../data/portfolio-casestudy/", true, /\.*/);
		const images = context
			.keys()
			.filter(x => RegExp(this.props.params.id + "/images").test(x))
			.map(x => context(x));
		this.setState({images: images});
		// console.log(this.state.images);
	}

	render() {
		const data = portfolioData[this.props.params.id];

		const defaultWriteup = (
			<section>
				<h1>{ data.name }</h1>
				<p>We're currently writing up the writeup for this project. In the meantime, have a look at the screenshots below!</p>
			</section>
		)

		const images = this.state.images.map((x, i) => (
			<div 
				key={"image" + i} 
				className="image-tile" 
				onClick={ this.toggleImageModal } 
				style={ {backgroundImage: `url(${x})`} } />
		));

		return (
			<div className="CaseStudy">
				<div 
					className={ classnames("headerimg", !data.headerImg && "placeholder") } 
					style={{backgroundImage: `url(${data.headerImg || data.imageSrc})`}} />
				
				<div className="content">
					<aside className="meta">
						<dl>
							<dt>Date</dt>
							<dd>July 6, 2015</dd>
							<dt>Resources</dt>
							<dd>{ data.resources.join(", ") }</dd>
							<TextButton component="a" href={ data.url } target="_blank" className="primary">
								Visit
							</TextButton>
						</dl>
					</aside>
					<article>
						{ data.caseStudy ? (<section dangerouslySetInnerHTML={ {__html: data.caseStudy } }/>)  : defaultWriteup }				
						<section className="image-gallery">
							{ this.state && images }
						</section>
					</article>
				</div>
				<Modal opened={ this.state.imageModalOpened } onClose={ this.toggleImageModal } >
					<div>
						wat
					</div>
				</Modal>
			</div>
		);
	}
}
