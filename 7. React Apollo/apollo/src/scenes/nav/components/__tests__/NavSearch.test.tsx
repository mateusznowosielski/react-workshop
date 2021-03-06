import * as React from 'react';
import { cleanup, fireEvent, render } from 'react-testing-library';
import NavSearch from 'scenes/nav/components/NavSearch';
import { createClient, renderWithApolloHooksRouter, waitForNextTick } from 'common/helpers/testHelpers';
import { MOCK_ERROR, MOCK_SUCCESS } from 'scenes/nav/components/__mocks__/navSearch.mock';
import ApolloClient from 'apollo-client';

afterEach(cleanup);

it('verifying NavSearch to be rendered', () => {
  const { container } = renderWithApolloHooksRouter(<NavSearch/>);

  expect(container).toMatchSnapshot();
});

it('verifying NavSearch to be rendered in loading state', async () => {
    const client: ApolloClient<any> = createClient(MOCK_SUCCESS);
    const { container } = renderWithApolloHooksRouter(<NavSearch />, { client });

    const input: HTMLInputElement = container.querySelector(`input`) as HTMLInputElement;
    expect(input).toBeDefined();
    fireEvent.change(input, { target: { value: 'Admin' }});

    expect(container).toMatchSnapshot();
});

it('verifying NavSearch to be rendered with GO button', async () => {
  const client: ApolloClient<any> = createClient(MOCK_SUCCESS);
  const { container, history } = renderWithApolloHooksRouter(<NavSearch />, { client });

  const input: HTMLInputElement = container.querySelector(`input`) as HTMLInputElement;
  expect(input).toBeDefined();
  fireEvent.change(input, { target: { value: 'Admin' }});

  // @ts-ignore
  render(null);
  await waitForNextTick();

  const button: HTMLButtonElement = container.querySelector(`button`) as HTMLButtonElement;
  expect(button).toBeDefined();
  fireEvent.click(button);

  expect(history.location.pathname).toBe('/provider/1000');
});

it('verifying NavSearch to be rendered with error', async () => {
  const client: ApolloClient<any> = createClient(MOCK_ERROR);
  const wrapper = renderWithApolloHooksRouter(<NavSearch />, { client });

  const input: HTMLInputElement = wrapper.container.querySelector('input') as HTMLInputElement;
  fireEvent.click(input);
  fireEvent.change(input, { target: { value: 'None' }});

  // @ts-ignore
  render(null);
  await waitForNextTick();

  const label: string = `GraphQL error: ${(MOCK_ERROR[0].result as any).errors[0].message}`;
  expect(wrapper.getAllByText(label)).toBeDefined();
});