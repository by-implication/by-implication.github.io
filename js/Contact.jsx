import React from 'react';
import {GoogleMaps, Marker} from "react-google-maps";

export default class Contact extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		// replace content of example@email.com.
		React.findDOMNode(this.refs.email).innerHTML = "&#099;&#111;&#110;&#116;&#097;&#099;&#116;&#064;&#098;&#121;&#105;&#109;&#112;&#108;&#105;&#099;&#097;&#116;&#105;&#111;&#110;&#046;&#099;&#111;&#109;";
	}
	render() {
		const location = {lat: 14.6108207, lng: 121.052544};
		return (
			<section id="Contact">
				<div style={{height: 320, width: "100%"}}>
					<GoogleMaps 
						ref="map"
						containerProps={{style: {height: "100%", width: "100%"}}}
						googleMapsApi={ "undefined" !== typeof google ? google.maps : null } 
						zoom={17} 
						center={ location }>
						<Marker position={ location } key="marker" animation={ 2 } />
					</GoogleMaps>
				</div>
				<ul className="contact-methods">
					<li>
						<span className="icon icon-email" />
						<span ref="email">goToHellSpamBots@email.com</span>
					</li>
					<li>
						<span className="icon icon-map" />
						<span>6c 2nd Avenue, Brgy. Bagong Lipunan ng Crame, QC</span>
					</li>
					<li>
						<span className="icon icon-twitter" />
						<a href="https://twitter.com/byimplication">@byimplication</a>
					</li>
					<li>
						<span className="icon icon-facebook-square" />
						<a href="https://www.facebook.com/byimplication">facebook/byimplication</a>
					</li>
				</ul>
			</section>
		);
	}
}
