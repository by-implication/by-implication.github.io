import React from 'react';

export default class CaseStudy extends React.Component {
	componentDidMount() {
		const id = this.props.params.id; 
		const writeup = require(`../data/portfolio-casestudy/${id}/casestudy.md`);
		// do something
		this.setState({id: id, writeup: writeup});
	}
	render() {
		return (
			<div>
				{ this.state && this.state.id }
				{ this.state && <span dangerouslySetInnerHTML={ {__html: this.state.writeup } }/> }
			</div>
		);
	}
}
