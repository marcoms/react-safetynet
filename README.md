# react-safetynet

react-safetynet provides a simple way to encapsulate errors, preventing them from
crashing your app completely. Upon receiving an error from one of its children,
the component will swap it's contents with an explanation of what went wrong.

## Usage

### JavaScript

```jsx
import SafetyNet from 'react-safetynet';

class App extends React.Component {
   render() {
      return (
         <div>
            <h1>SafetyNet Example</h1>

            <SafetyNet>
               {/* The following component throws an error in its render() method */}
               <SuspiciousComponent></SuspiciousComponent>
            </SafetyNet>
         </div>
      );
   }
}
```

### Result

![Result](./docs/result.png)

## API

The following may be passed as `props`.

### `errorHandler`

- Type: `(error: Error, errorInfo: React.ErrorInfo) => void`

Will be called when an error is caught by the SafetyNet instance. For complete documenation of `error` and `errorInfo`, see the [React docs](https://reactjs.org/docs/react-component.html#componentdidcatch).
