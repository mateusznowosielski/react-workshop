import * as React from 'react';
import { render } from 'react-dom';
import App from "App";
import { BrowserRouter as Router } from 'react-router-dom';

const WrappedApp: React.ReactElement<any> = (
    <Router basename="r">
        <App />
    </Router>
);

render(WrappedApp, document.getElementById('root'));
