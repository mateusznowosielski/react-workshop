import * as React from 'react';
import { ClickCountContext } from 'components/ProviderComponent';

class Trigger extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <>
                <h1>Trigger</h1>
                <ClickCountContext.Consumer>
                    {({handleClick}: any) => (
                        <button onClick={handleClick}>Click Me</button>
                    )}
                </ClickCountContext.Consumer>
            </>
        );
    }
};

export default Trigger;
