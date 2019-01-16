import * as React from 'react';
import useRouterHook from 'use-react-router';

const Provider: React.FunctionComponent<any> = () => {

    const { match }: any = useRouterHook();

    return (
        <div>
            <h1>Provider: {match.params.id}</h1>
        </div>
    )
};

export default Provider;
