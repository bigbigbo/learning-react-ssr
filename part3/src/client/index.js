import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import createHistory from '../shared/utils/history';
import App from '../shared/App';

const history = createHistory();

let initialData = JSON.parse(document.getElementById('initialData').value.replace(/\\n/g, ''));
window.__INITIAL_DATA__ = initialData || {};

ReactDOM.hydrate(
  <Router history={history}>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </Router>,
  document.getElementById('root')
);
