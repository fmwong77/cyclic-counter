import React from 'react';

class CycleCounter extends React.Component {
	constructor() {
		super();
		this.state = { counter: 0 };
	}

	handleClick = () => {
		console.log(this.state.counter);
		this.setState({ counter: (this.state.counter += 1) });
	};

	render() {
		return (
			<button
				data-testid="cycle-counter"
				style={{ fontSize: '1rem', width: 120, height: 30 }}
				onClick={this.handleClick}
			>
				{this.state.counter}
			</button>
		);
	}
}

export default CycleCounter;
