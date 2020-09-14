import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import createHistory from '../shared/utils/history';
import App from '../shared/App';

const history = createHistory();

ReactDOM.hydrate(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
);
