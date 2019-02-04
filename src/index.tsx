
import * as React from 'react';
import './index.css';

interface SafetyNetState {
	hasError: boolean;
	error?: Error,
	errorInfo?: React.ErrorInfo,
}

interface SafetyNetProps {
	errorHandler?: (error: Error, errorInfo: React.ErrorInfo) => void;
};

class SafetyNet extends React.Component<SafetyNetProps, SafetyNetState> {
	state: SafetyNetState = {
		hasError: false,
	};

	constructor(props: SafetyNetProps) {
		super(props);
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		this.setState({
			hasError: true,
			error,
			errorInfo,
		});

		if (typeof this.props.errorHandler === 'function') {
			return this.props.errorHandler(error, errorInfo);
		}

		console.error('[SafetyNet] Recived error:', error, errorInfo);
	}

	render() {
		if (!this.state.hasError) {
			return (
				<div className="SafetyNet">
					{this.props.children}
				</div>
			);
		} else {
			return (
				<div className="SafetyNet SafetyNet--error">
					<p className="SafetyNet__ErrorHeader">Error encountered within this boundary:</p>

					<pre className="SafetyNet__ErrorDetails">
						{this.state.error.name}: {this.state.error.message}
						{this.state.errorInfo.componentStack}
					</pre>
				</div>
			)
		}
	}
}

export default SafetyNet;
