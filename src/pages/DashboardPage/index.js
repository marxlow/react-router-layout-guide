import React from "react";
import { Switch } from "react-router-dom";

import RouteWithProps from "../../shared/routes/RouteWithProps";
import routes from "../../routes";

import SplashView from "./SplashView";
import SettingsView from "./SettingsView";
import StatisticsView from "./StatisticsView";

const DashboardPage = () => {
  return (
    <Switch>
      <RouteWithProps exact path={routes.dashboard} component={SplashView} />
      <RouteWithProps exact path={routes.settings} component={SettingsView} />
      <RouteWithProps
        exact
        path={routes.statistics}
        component={StatisticsView}
      />
    </Switch>
  );
};

export default DashboardPage;
