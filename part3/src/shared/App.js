import React from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from './router';

const NotFound = ({ staticContext }) => {
  if (staticContext) {
    staticContext.notFound = true;
  }

  return <h1>404 Not Found</h1>;
};

const App = () => {
  return (
    <Switch>
      {routes.map((item) => {
        return <Route key={item.path} path={item.path} exact sensitive component={item.component} />;
      })}
      <Route component={NotFound} />
    </Switch>
  );
};
export default App;
