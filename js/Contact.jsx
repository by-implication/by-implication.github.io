import React from 'react';
// import {GoogleMaps, Marker} from "react-google-maps";

export default class Contact extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		// replace content of example@email.com.
		const email = "&#099;&#111;&#110;&#116;&#097;&#099;&#116;&#064;&#098;&#121;&#105;&#109;&#112;&#108;&#105;&#099;&#097;&#116;&#105;&#111;&#110;&#046;&#099;&#111;&#109;";
		React.findDOMNode(this.refs.email).innerHTML = email;
		React.findDOMNode(this.refs.email).setAttribute("href", "mailto:contact@byimplication.com");
	}
	render() {
		const location = {lat: 14.6108207, lng: 121.052544};
		return (
			<section id="Contact">
				<div style={{height: 320, width: "100%"}}>
					{/*<GoogleMaps 
											ref="map"
											containerProps={{style: {height: "100%", width: "100%"}}}
											googleMapsApi={ "undefined" !== typeof google ? google.maps : null } 
											zoom={17} 
											center={ location }>
											<Marker position={ location } key="marker" animation={ 2 } />
										</GoogleMaps>*/}
				</div>
				<ul className="contact-methods">
					<li>
						<span className="icon icon-email" />
						<a ref="email" href="mailto:goToHellSpamBots@email.com">goToHellSpamBots@email.com</a>
					</li>
					<li>
						<span className="icon icon-map" />
						<a target="_blank" href="https://www.google.com.ph/maps/place/Sari+Software+%2F+By+Implication/@14.6108207,121.052544,17z/data=!4m6!1m3!3m2!1s0x3397b7c333fb31cd:0x85fb97a6a4763727!2sSari+Software+%2F+By+Implication!3m1!1s0x3397b7c333fb31cd:0x85fb97a6a4763727?hl=en">6c 2nd Avenue, Brgy. Bagong Lipunan ng Crame, QC</a>
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
			</section>
		);
	}
}
