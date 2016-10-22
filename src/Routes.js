import React from 'react';
import {Router, Route, browserHistory} from 'react-router';

import App from './App';
import {View} from './containers/View/View';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
        <Route path="file-tree" component={View}/>
        </Route>
    </Router>
);