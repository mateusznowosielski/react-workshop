import { cleanup } from 'react-testing-library';
import App from 'App';
import {
  renderWithApolloHooksRouterRoute,
  renderWithApolloHooksRouter,
} from 'common/helpers/testHelpers';
import * as React from 'react';

afterEach(cleanup);

const routes: Array<string> = [
  "/dashboard",
  "/connections",
  "/reports",
  "/library",
  "/audiences",
  "/campaigns",
  "/provider/1000",
  "/settings"
];

it('verifying App to be rendered',() => {
  const { container } = renderWithApolloHooksRouterRoute(App);

  expect(container).toMatchSnapshot();
});

it('verifying App to be rendered with specified routes',() => {
  routes.forEach( (route: string) => {
    const wrapper = renderWithApolloHooksRouter(<App />, { route });

    expect(wrapper.container).toMatchSnapshot();
  });
});