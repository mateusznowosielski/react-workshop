import * as React from 'react';

const FunctionalComponent: React.FunctionComponent<any> = (props: any) => (
    <>
        <h1>Functional Component: {props.browserWidth}</h1>
        <h2>Message: {props.message.data}</h2>
        <h3>Click count: {props.clickCounter}</h3>
        <button onClick={props.counterHandler}>Click me to update?</button>
    </>
);

export default FunctionalComponent;
