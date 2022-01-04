import React from "react";
import { Route, Switch } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes";

const AppRouter = () => {
  const user = true;

  return user ? (
    <Switch>
      {privateRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact={true} />
      ))}
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact={true} />
      ))}
    </Switch>
  );
};

export default AppRouter;
