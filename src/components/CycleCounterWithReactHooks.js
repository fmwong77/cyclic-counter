import React, { useState } from 'react';

const CycleCounterWithReactHooks = ({ cycle }) => {
	const [counter, setCounter] = useState(0);
	console.log(cycle);

	const handleClick = (e) => {
		// e.preventDefault();
		setCounter((counter) => (counter + 1 >= cycle ? 0 : counter + 1));
	};

	return (
		<React.Fragment>
			<button
				data-testid="cycle-counter"
				style={{ fontSize: '1rem', width: 120, height: 30 }}
				onClick={() => {
					setCounter((counter) => (counter + 1 >= cycle ? 0 : counter + 1));
				}}
			>
				{counter}
			</button>
		</React.Fragment>
	);
};

export default CycleCounterWithReactHooks;
