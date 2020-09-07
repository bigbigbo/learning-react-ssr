import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from '../../shared/App';
import Html from '../components/HTML';

const helmetContext = {};
const routerContext = {};

const reactSSR = (req, res) => {
  const content = renderToString(
    <Router location={req.url} context={routerContext}>
      <HelmetProvider context={helmetContext}>
        <App />
      </HelmetProvider>
    </Router>
  );

  return res.send(
    '<!doctype html>' +
      renderToString(
        <Html
          helmetContext={helmetContext}
          css={[res.locals.assetPath('bundle.css'), res.locals.assetPath('vendor.css')]}
          scripts={[res.locals.assetPath('bundle.js'), res.locals.assetPath('vendor.js')]}
        >
          {content}
        </Html>
      )
  );
};

export default reactSSR;
