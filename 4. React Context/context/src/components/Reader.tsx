import * as React from 'react';
import { ClickCountContext } from 'components/ProviderComponent';

const Reader: React.FunctionComponent<any> = () => (
    <>
        <h1>Reader</h1>
        <ClickCountContext.Consumer>
            {({clickCounter}: any) => (
                <h3>Click count: {clickCounter}</h3>
            )}
        </ClickCountContext.Consumer>

    </>
);

export default Reader;
