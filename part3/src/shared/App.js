import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import routes from './router';

const NotFound = () => <p>404 Not Found</p>;

const renderRoutes = (routes) => {
  if (!routes) {
    return null;
  }

  return (
    <Switch>
      {routes.map((route, i) => {
        const { path, component, routes: _routes, redirect } = route;
        const isExact = !_routes;

        const childRoutes = _routes ? renderRoutes(_routes) : null;

        if (redirect) {
          return <Redirect exact key={route.key || i} from={path} to={redirect} />;
        }

        if (component) {
          const RouteComponent = (props) => {
            return <component {...props}>{childRoutes}</component>;
          };

          return <Route key={route.key || i} path={path} exact={isExact} sensitive component={RouteComponent} />;
        }

        const BlankComponet = () => childRoutes;

        return <Route key={route.key || i} path={path} exact={isExact} sensitive component={BlankComponet} />;
      })}
      <Route component={NotFound} />
    </Switch>
  );
};

const App = () => {
  return (
    <Switch>
      {routes.map((item) => {
        return <Route key={item.path} path={item.path} exact sensitive component={item.component} />;
      })}
    </Switch>
  );
};
export default App;
