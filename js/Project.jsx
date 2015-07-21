import ProjectStyles from "../css/Project.css";

import React from 'react';
import classnames from "classnames";
import portfolioData from "../data/portfolio-data";
import Modal from "./Modal";
import Toolbar from "./Toolbar";

import {TextButton, IconButton} from "./Buttons";

export default class Project extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			images: [],
			imageModalOpened: false,
			currentImageUrl: null
		}
		this.toggleImageModal = this.toggleImageModal.bind(this);
	}
	toggleImageModal(image = null) {
		this.setState({
			currentImageUrl: image
		});
	}
	componentDidMount() {
		const context = require.context("../data/portfolio/", true, /\.*/);
		const images = context
			.keys()
			.filter(x => RegExp(this.props.params.id + "/images").test(x))
			.map(x => context(x));
		this.setState({images: images});

		if (typeof window !== "undefined" && typeof document !== "undefined") {
			setTimeout(x => {
				const grid = React.findDOMNode(this.refs.imageGallery);
				const msnry = new Masonry(grid, {
					itemSelector: ".image-tile",
					gutter: 8,
					percentPosition: true,
				});
			}, 200)
		}
	}

	render() {
		const data = portfolioData[this.props.params.id];

		const defaultWriteup = (
			<section>
				<h2>{ data.name }</h2>
				<p>We're currently writing up the writeup for this project. In the meantime, have a look at these screenshots!</p>
			</section>
		)
		// style={ {backgroundImage: `url(${x})`} }
		const images = [data.imageSrc].concat(this.state.images).map((x, i) => (
			<div
				key={"image" + i}
				className="image-tile"
				onClick={ this.toggleImageModal.bind(this, x) }>
				<img src={ x } />
			</div>
		));

		return (
			<div className="Project view">
				<div className="content">
					<article className="meta">
							{ data.writeup ? <section dangerouslySetInnerHTML={  {__html: data.writeup } }/> : defaultWriteup }
						<dl>
							<dt>Resources</dt>
							<dd>{ data.resources.join(", ") }</dd>
							<TextButton component="a" href={ data.url } target="_blank" className="primary">
								Visit
							</TextButton>
						</dl>
					</article>

					<section ref="imageGallery" className="image-gallery">
						{ this.state && images }
					</section>
				</div>
				<Modal className="image-modal" opened={ !!this.state.currentImageUrl } overlayClosesModal={ false }>
					<div className="Toolbar">
						<div className="spacer" />
						<IconButton className="image-modal-close" onClick={ this.toggleImageModal.bind(this, null) }>
							<span className="icon-close" />
						</IconButton>
					</div>
					<img src={this.state.currentImageUrl} />
				</Modal>
			</div>
		);
	}
}
