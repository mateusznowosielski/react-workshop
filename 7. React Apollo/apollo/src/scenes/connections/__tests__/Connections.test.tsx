import * as React from 'react';
import { cleanup, render } from 'react-testing-library';
import Connections from 'scenes/connections/Connections';

afterEach(cleanup);

it('verifying Connections to be rendered', () => {
  const { container } = render(<Connections/>);

  expect(container).toMatchSnapshot();
});