import * as React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from '@dc0de/react-apollo-hooks';
import SrmConfig, { ISrmConfig } from 'common/config/SrmConfig';
import App from "App";
import { BrowserRouter as Router } from 'react-router-dom';

const GRAPHQL_END_POINT: string = 'http://localhost:5000/graphql';
const REST_END_POINT: string = 'http://localhost:3050/shared';

export const srmConfig: ISrmConfig = new SrmConfig({
    graphQlUri: GRAPHQL_END_POINT,
    restApiUri: REST_END_POINT,
});
srmConfig.register();

const WrappedApp: React.ReactElement<any> = (
    <ApolloProvider client={srmConfig.client}>
        <ApolloHooksProvider client={srmConfig.client}>
            <Router basename="r">
                <App />
            </Router>
        </ApolloHooksProvider>
    </ApolloProvider>
);

render(WrappedApp, document.getElementById('root'));
