import * as React from 'react';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { MockLink } from 'apollo-link-mock';
import { Route, Router } from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render} from 'react-testing-library';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from '@dc0de/react-apollo-hooks';
import { QueryMock } from '../types/mock';

export const MOCK: Array<QueryMock> = [
  {
    request: {},
    result: {},
  }
];

export function renderWithRouter (
  ui: React.ReactElement<any>,
  {route = '/', history = createMemoryHistory({initialEntries: [route]})} = {},
) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history,
  }
}

// export const routerMock = () => ({
//   push: jest.fn(),
//   replace: jest.fn(),
//   go: jest.fn(),
//   goBack: jest.fn(),
//   goForward: jest.fn(),
//   setRouteLeaveHook: jest.fn(),
//   isActive: jest.fn(),
// });

export function createClient(mocks: any = MOCK) {
  return new ApolloClient({
    cache: new InMemoryCache({addTypename: false}),
    link: new MockLink(mocks),
  });
}

// export function renderWithApolloHooks(
//   ui: React.ReactElement<any>,
//   client: ApolloClient<any> = createClient()
// ) {
//   return {
//     ...render(
//       <ApolloProvider client={client}>
//         <ApolloHooksProvider client={client}>
//           {ui}
//         </ApolloHooksProvider>
//       </ApolloProvider>
//     ),
//     client,
//   }
// }

export function renderWithApolloHooksRouter(
  ui: React.ReactElement<any>,
  {
    client = createClient(),
    route = '/',
    history = createMemoryHistory({initialEntries: [route]})
  } = {},
) {
  return {
    ...render(
      <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
          <Router history={history}>
            {ui}
          </Router>
        </ApolloHooksProvider>
      </ApolloProvider>
    ),
    client,
    history,
  }
}

export function renderWithApolloHooksRouterRoute(
  ui: React.ComponentType<any>,
  {
    client = createClient(),
    route = '/',
    path = '',
    history = createMemoryHistory({initialEntries: [route]})
  } = {},
) {
  return {
    ...render(
      <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
          <Router history={history}>
            <Route component={ui} path={path} />
          </Router>
        </ApolloHooksProvider>
      </ApolloProvider>
    ),
    client,
    history,
  }
}

export const waitForNextTick = () => new Promise(resolve => setTimeout(resolve));

