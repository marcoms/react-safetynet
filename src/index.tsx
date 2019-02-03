
import * as React from 'react';

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
		return this.props.children;
	}
}
console.log('what', SafetyNet);

export default SafetyNet;
