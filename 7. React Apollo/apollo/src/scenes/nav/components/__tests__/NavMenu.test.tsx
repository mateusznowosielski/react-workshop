import * as React from 'react';
import { cleanup, fireEvent } from 'react-testing-library';
import NavMenu from 'scenes/nav/components/NavMenu';
import { renderWithRouter } from 'common/helpers/testHelpers';

afterEach(cleanup);

const routes: Array<string> = [
  "/dashboard",
  "/connections"
];

it('verifying NavMenu to be rendered',() => {
  const { container } = renderWithRouter(<NavMenu />);

  expect(container).toMatchSnapshot();
});

it('verifying if clicking on each menu item changes the history pathname',() => {
  const { container, history } = renderWithRouter(<NavMenu />, {});

  routes.forEach((route: string) => {
    const dashboardLink = container.querySelector(`a[href=\'${route}\']`);

    fireEvent.click(dashboardLink as Element);

    expect(history.location.pathname).toEqual(route);
  });
});