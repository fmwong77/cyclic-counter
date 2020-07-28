import React from 'react';

class CycleCounter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0,
			cycle: this.props.cycle,
		};
	}

	handleClick = () => {
		this.setState({
			counter:
				this.state.counter + 1 >= this.state.cycle
					? 0
					: (this.state.counter += 1),
		});
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
