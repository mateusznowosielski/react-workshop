import { cleanup, render } from 'react-testing-library';
import Nav from 'scenes/nav/Nav';
import { createClient, renderWithApolloHooksRouterRoute, waitForNextTick } from 'common/helpers/testHelpers';
import { MOCK_SUCCESS } from '../components/__mocks__/navProvider.mock';
import ApolloClient from 'apollo-client';

afterEach(cleanup);

it('verifying Nav to be rendered', async () => {
  const { container } = renderWithApolloHooksRouterRoute(Nav);

  expect(container).toMatchSnapshot();
});

it('verifying Nav to render with selected provider', async () => {
  const client: ApolloClient<any> = createClient(MOCK_SUCCESS);
  const route: string = '/provider/1000';
  const path: string = '/provider/:id';

  const wrapper = renderWithApolloHooksRouterRoute(Nav, { client, route, path });

  // @ts-ignore
  render(null);
  await waitForNextTick();

  expect(wrapper.container).toMatchSnapshot();
});
