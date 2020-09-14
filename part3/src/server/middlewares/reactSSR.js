import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import App from '../../shared/App';

const routerContext = {};

const reactSSR = () => (req, res) => {
  const content = renderToString(
    <Router location={req.url} context={routerContext}>
      <App />
    </Router>
  );

  if (routerContext.notFound) {
    res.status(404);
  }

  return res.send('<!doctype html>' + content);
};

export default reactSSR;
