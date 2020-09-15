import React from 'react';

const HTML = ({ children, jsAssets, cssAssets = [], state = '{}', helmetContext: { helmet } }) => (
  <html lang="">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {helmet.base.toComponent()}
      {helmet.title.toComponent()}
      {helmet.meta.toComponent()}
      {helmet.link.toComponent()}
      {helmet.script.toComponent()}
      {cssAssets.map((chunk) => (
        <link key={chunk.name} rel="stylesheet" href={chunk.path} />
      ))}
      <script
        dangerouslySetInnerHTML={{
          __html: `window.__PRELOADED_STATE__ = ${JSON.stringify(state)};`,
        }}
      />
    </head>
    <body>
      <div id="root" dangerouslySetInnerHTML={{ __html: children }} />
      {jsAssets.map((chunk) => (
        <script key={chunk.name} src={chunk.path} />
      ))}
    </body>
  </html>
);

export default HTML;
