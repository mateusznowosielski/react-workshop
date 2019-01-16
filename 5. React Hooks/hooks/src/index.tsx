import * as React from 'react';
import { render } from 'react-dom';

import App from "App";

const WrappedApp: React.ReactElement<any> = ( <App /> );

render(WrappedApp, document.getElementById('root'));
