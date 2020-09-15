/* eslint-disable no-param-reassign */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from '../../shared/App';
import mainfest from '../../../build/client/manifest.json';
import Html from '../components/HTML';
import routes from '../../shared/router';

const initialChunks = ['runtime', 'main'];
const routerContext = { initialData: {} };
const helmetContext = {};

const jsAssets = initialChunks
  .filter((chunkName) => mainfest[chunkName + '.js'])
  .map((chunkName) => ({ name: chunkName, path: mainfest[chunkName + '.js'] }));
const cssAssets = initialChunks
  .filter((chunkName) => mainfest[chunkName + '.css'])
  .map((chunkName) => ({ name: chunkName, path: mainfest[chunkName + '.css'] }));

const reactSSR = () => async (req, res) => {
  const target = routes.find((i) => i.path === req.url);

  if (target.component.getInitialProps) {
    const initialData = await target.component.getInitialProps({ req, res });
    routerContext.initialData = initialData;
  }

  const content = renderToString(
    <Router location={req.url} context={routerContext}>
      <HelmetProvider context={helmetContext}>
        <App />
      </HelmetProvider>
    </Router>
  );

  if (routerContext.notFound) {
    res.status(404);
    routerContext.notFound = false;
  }

  return res.send(
    '<!doctype html>' +
      renderToString(
        <Html
          jsAssets={jsAssets}
          cssAssets={cssAssets}
          initialData={routerContext.initialData}
          helmetContext={helmetContext}
        >
          {content}
        </Html>
      )
  );
};

export default reactSSR;
