# React Components, Lifecycle, API

## Components
### Class based
- encourage unintentional patterns that make these optimizations fall back to a slower path
- present issues for today’s tools, too
- classes don’t minify very well
- classes make hot reloading flaky and unreliable
### Functional
- no inheritance
- no `this`
- no binding
## Lifecycle
### Mounting

- `constructor(props)`
- `static getDerivedStateFromProps(props, state)`
- `render()`
- `componentDidMount()`

##### Legacy
- `UNSAFE_componentWillMount()`

### Updating

- `static getDerivedStateFromProps(props, state)`
- `shouldComponentUpdate()`
- `render()`
- `getSnapshotBeforeUpdate(prevProps, prevState)`
- `componentDidUpdate(prevProps, prevState, snapshot)`

##### Legacy
- `UNSAFE_componentWillUpdate(nextProps, nextState)`
- `UNSAFE_componentWillReceiveProps(nextProps)`

##### Rarely used
- `shouldComponentUpdate(nextProps, nextState)`

### Unmounting

- `componentWillUnmount()`

### Error Handling

- `static getDerivedStateFromError(error)`
- `componentDidCatch()`

## Example


## API
### Methods
- `setState(updater[, callback])`
- `component.forceUpdate(callback)`

### Properties
#### Class
- `defaultProps`
- `displayName`
#### Instance
- `props`
- `state`

## Complications
- passing props
- communicating between components
- state management and single source of truth

## Exercise

1. In a ClassComponent print out screen width and height.
1. Make sure that screen width and height is updated in real time.
1. Make sure that any remaining listeners are removed when component is unmounted.
1. Add logic to ClassComponent that user cannot increase click count above 5.