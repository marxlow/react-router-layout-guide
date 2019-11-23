import React from "react";
import { Route } from "react-router-dom";

const RouteWithProps = ({ exact, path, extraProps, component: Component }) => {
  return (
    <Route
      exact={exact}
      path={path}
      render={props => {
        const allProps = { ...props, ...extraProps };
        return <Component {...allProps} />;
      }}
    />
  );
};

export default RouteWithProps;
