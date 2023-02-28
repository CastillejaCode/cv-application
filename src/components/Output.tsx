import React, { Component } from 'react';

class Output extends Component {
	constructor(props: string) {
		super(props);
	}

	render() {
		// const { firstName } = this.props;
		return <h1>{this.props.personal.name}</h1>;
	}
}

export default Output;
