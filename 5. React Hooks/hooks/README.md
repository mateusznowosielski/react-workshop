# React Hooks
#### Provide
- Solution for reusing behavior and statefull logic between components
- Replacement for HOC and Render Props Pattern
- Avoid restructuring components and changing component hierarchy
- Used purely in functional components
- Avoiding *wrapper hell*

#### Type of hooks
- `const [value, setValue] = useState(initialValue);` replacement for `setState()`
- `useEffect(() => { ... })` replacement for `componentDidMount, componentDidUpdate, componentWillUnmount`
- `const locale = useContext(LocaleContext)`


- `const [todos, dispatch] = useReducer(todosReducer)`
- `const memoizedCallback = useCallback(() => { doSomething })`
- `const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b])`
- `const refContainer = useRef(initialValue)`
- `useImperativeMethods(ref, createInstance, [inputs])`
- `useLayoutEffect(() => { ... })`

#### Rules
- only on component top level
- don't call hooks inside loops, conditions, nested functions
- being called only from React function component
- from custom hooks

#### Hooks used in SRM
- `const {data, loading, error} = useQuery(APOLLO_QUERY, { options })`
- `const {data, loading, error} = useMutation(APOLLO_MUTATION, { options })`
- `const {match, history, location} = useRouterHook()`

#### No Hooks for:
- `getSnapshotBeforeUpdate`
- `componentDidCatch`

## Exercise

1. Update the clickCounter on button click using hooks
1. Display window width and make sure its updating in real time - using hooks