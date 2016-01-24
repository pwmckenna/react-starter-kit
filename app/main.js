import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import { createHashHistory } from 'history';

import 'bootstrap/less/bootstrap.less';

import Layout from './Components/Layout';
import Home from './Components/Home';

import './utils/ga';

const history = createHashHistory({
  queryKey: false
});

render((
  <Router history={history}>
    <Route component={Layout}>
      <Route
        path="/"
        component={Home}
      />
    </Route>
  </Router>
), document.getElementById('main'));
