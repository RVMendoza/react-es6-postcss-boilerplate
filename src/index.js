import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ComponentLibrary from './component-library';
import './index.css';
import { Router, Route, browserHistory } from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={ComponentLibrary} />
    {/* add other routes here */}
    <Route path="/app" component={App} />
  </Router>,
  document.getElementById('root')
);
