import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { Bowl } from './works/bowl';
import { Top } from './pages/top';
import { StylesProvider } from '@material-ui/core';
import { Cat } from './works/cat';
import { Messon } from './works/messon';

ReactDOM.render(
  <StylesProvider injectFirst>
    <Router>
      <Switch>
        <Route exact path="/" component={Top} />
        <Route exact path="/works/bowl" component={Bowl} />
        <Route exact path="/works/cat" component={Cat} />
        <Route exact path="/works/kogepanman" component={Messon} />
      </Switch>
    </Router>
  </StylesProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
