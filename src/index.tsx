
import * as React from 'react';
import './index.css';

type SafetyNetState = {
	hasError: boolean;
}

class SafetyNet extends React.Component {
	state: SafetyNetState = {
		hasError: false,
	};

	constructor(props: any) {
		super(props);
	}

	render() {
		return (
			<div className="SafetyNet">
				{this.props.children}
			</div>
		)
	}
}

export default SafetyNet;
