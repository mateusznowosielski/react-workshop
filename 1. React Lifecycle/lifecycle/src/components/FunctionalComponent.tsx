import * as React from 'react';

const FunctionalComponent: React.FunctionComponent<any> = (props: any) => {

    const initialClickCounter : number = 0;

    const handleClick = (event: any) => {
        console.log('FunctionalComponent handleClick', event, initialClickCounter);
    };

    return (
        <>
            <h1>Functional Component</h1>
            <h2>Message: {props.message.data}</h2>
            <h3>Click count:</h3>
            <button onClick={handleClick}>Click me to update?</button>
        </>
    );
};

export default FunctionalComponent;
