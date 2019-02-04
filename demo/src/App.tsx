import * as React from 'react';
import SafetyNet from 'react-safetynet';

class App extends React.Component {
  createError = () => {
    throw new Error('Random Error');
  };

  myHandler = (error: Error, errorInfo: React.ErrorInfo) => {
    console.error('Custom error handler:', error, errorInfo);
  };

  render() {
    return (
      <div className="OuterDiv">
        <h1>SafetyNet Example</h1>

        <SafetyNet errorHandler={this.myHandler}>
          <SuspiciousComponent></SuspiciousComponent>
        </SafetyNet>
      </div>
    );
  }
}

class SuspiciousComponent extends React.Component {
  render() {
    throw new Error('Fatal error while reticulating splines');

    return <p>
      Don't mind me...
    </p>
  }
}

export default App;
