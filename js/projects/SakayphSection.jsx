import React from 'react';
import desktopImage from "../../data/portfolio/sakayph/sakay-desktop.png";
import mobileImage from "../../data/portfolio/sakayph/sakay-mobile.png";

export default class SakayphSection extends React.Component {
	render() {
		return (
			<section className="project-section SakayphSection">
				<div className="info">
					<h1>Sakay.ph</h1>
					<p>Lorem Ipsum</p>
				</div>
				<div className="images">
					<div className="desktop-image">
						<img src={ desktopImage } />
					</div>
					<img className="mobile-image" src={ mobileImage } />
				</div>
			</section>
		);
	}
}
