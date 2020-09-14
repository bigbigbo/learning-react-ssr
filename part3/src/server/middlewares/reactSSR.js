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

  return res.send(
    `
  <!doctype html>
  <html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="theme-color" content="#000000" />
    <title></title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root">${content}</div>
  <script src="/static/client.bundle.js"></script><script src="/static/index.f5c8daff.chunk.js"></script></body>
</html>
  `
  );
};

export default reactSSR;
