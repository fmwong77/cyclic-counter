import React, { useState } from 'react';

const CycleCounterWithReactHooks = () => {
	const [counter, setCounter] = useState(0);

	return (
		<React.Fragment>
			<button
				data-testid="cycle-counter"
				style={{ fontSize: '1rem', width: 120, height: 30 }}
				onClick={() => {
					setCounter((counter) => (counter > 2 ? 0 : counter + 1));
				}}
			>
				{counter}
			</button>
		</React.Fragment>
	);
};

export default CycleCounterWithReactHooks;
