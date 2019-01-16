import * as React from 'react';
import { cleanup, render } from 'react-testing-library';
import Dashboard from 'scenes/dashboard/Dashboard';

afterEach(cleanup);

it('verifying Dashboard to be rendered', () => {
  const { container } = render(<Dashboard/>);

  expect(container).toMatchSnapshot();
});