import React from 'react';
import classnames from "classnames";

export default class About extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mapActive: false
		}
		this.mapContainerClick = this.mapContainerClick.bind(this);
		// this.mapContainerMouseOut = this.mapContainerMouseOut.bind(this);
	}
	componentDidMount() {
		// replace content of example@email.com.
		const email = "&#099;&#111;&#110;&#116;&#097;&#099;&#116;&#064;&#098;&#121;&#105;&#109;&#112;&#108;&#105;&#099;&#097;&#116;&#105;&#111;&#110;&#046;&#099;&#111;&#109;";
		React.findDOMNode(this.refs.email).innerHTML = email;
		React.findDOMNode(this.refs.email).setAttribute("href", "mailto:" + React.findDOMNode(this.refs.email).innerHTML);

		if (typeof document !== "undefined") {
			document.addEventListener("click", (x) => {
				if (this.state.mapActive) {
					this.setState({mapActive: false});
				}
			});
		}
	}
	mapContainerClick(event) {
		// enable scroll (and other pointer-related) events on the map once you click on it.
		event.stopPropagation();
		event.nativeEvent.stopImmediatePropagation();
		if (!this.state.mapActive) {
			this.setState({mapActive: true});
		}
	}

	// can't make this work at the moment because mouseout triggers presumably because of pointer-events: none.
	//
	// mapContainerMouseOut(event) {
	// 	console.log("wat");
	// 	// if (this.state.mapActive) {
	// 	// 	this.setState({mapActive: false});
	// 	// }
	// }
	render() {
		const location = {lat: 14.6108207, lng: 121.052544};
		return (
			<div id="About">
				<div className="writeup">
					<p>By Implication is an independent, award-winning software development and design firm in Metro Manila, Philippines.</p>
					<p>We care about making the world a better place, helping people understand that world, and solving the challenging problems that world has to offer.</p>
				</div>
				<ul className="contact-methods">
					<li>
						<span className="icon icon-email" />
						<a ref="email" href="#">contact &#x40; this domain</a>
					</li>
					<li>
						<span className="icon icon-twitter" />
						<a target="_blank" href="https://twitter.com/byimplication">@byimplication</a>
					</li>
					<li>
						<span className="icon icon-facebook-square" />
						<a target="_blank" href="https://www.facebook.com/byimplication">facebook/byimplication</a>
					</li>
				</ul>
				<section id="Quote">
					<blockquote>
						Perfection is finally attained not when there is no longer anything to add, but when there is no longer anything to take away.
						<cite>-Antoine de Saint Exupéry</cite>
					</blockquote>
				</section>
			</div>
		);
	}
}
