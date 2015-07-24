import React from 'react';
import {GoogleMaps, Marker} from "react-google-maps";

export default class About extends React.Component {
	constructor(props) {
		super(props);
		this.mapClick = this.mapClick.bind(this);
	}
	componentDidMount() {
		// replace content of example@email.com.
		const email = "&#099;&#111;&#110;&#116;&#097;&#099;&#116;&#064;&#098;&#121;&#105;&#109;&#112;&#108;&#105;&#099;&#097;&#116;&#105;&#111;&#110;&#046;&#099;&#111;&#109;";
		React.findDOMNode(this.refs.email).innerHTML = email;
		React.findDOMNode(this.refs.email).setAttribute("href", "mailto:" + React.findDOMNode(this.refs.email).innerHTML);

		// enable scroll (and other pointer-related) events on the map once you click on it.

	}
	mapContainerClick() {
		const mapContainerNode = React.findDOMNode(this.refs.mapContainer);
		
		_.map(document.querySelectorAll(".gm-style"), (el) => {
			el.style.pointerEvents = "auto";
			mapContainerNode.style.cursor = "auto";
		});
	}
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
						<span className="icon icon-map" />
						<a target="_blank" href="https://www.google.com.ph/maps/place/Sari+Software+%2F+By+Implication/@14.6108207,121.052544,17z/data=!4m6!1m3!3m2!1s0x3397b7c333fb31cd:0x85fb97a6a4763727!2sSari+Software+%2F+By+Implication!3m1!1s0x3397b7c333fb31cd:0x85fb97a6a4763727?hl=en">6C 2nd Avenue, Brgy. Bagong Lipunan ng Crame, QC</a>
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
				<div ref="mapContainer" style={{height: 340, width: "100%", backgroundColor: "#eee", position: "relative", marginTop: 50}} onClick={ this.mapContainerClick }>
					<GoogleMaps
						ref="map"
						containerProps={{style: {height: "100%", width: "100%"}}}
						googleMapsApi={ "undefined" !== typeof google ? google.maps : null }
						zoom={17}
						center={ location }>
						<Marker position={ location } key="marker" animation={ 2 } />
					</GoogleMaps>
					<div className="directions">
						<a target="_blank" href="https://maps.google.com/maps?q=by+implication&hl=en&ll=14.610973,121.053329&spn=0.011794,0.019333&sll=14.613153,121.064873&sspn=0.188699,0.309334&hq=by+implication&t=m&z=16&iwloc=A">Google Maps</a><a target="_blank" href="http://waze.to/hwdw54egew">Waze</a><a target="_blank" href="http://sakay.ph/?to=14.610823,121.052496&">Sakay.ph</a>
					</div>
				</div>
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
