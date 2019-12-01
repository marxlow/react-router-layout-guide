import React from "react";
import { Switch } from "react-router-dom";

import RouteWithProps from "../../shared/routes/RouteWithProps";
import routes from "../../routes";

import DashboardView from "./DashboardView";
import SettingsView from "./SettingsView";
import StatisticsView from "./StatisticsView";

const DashboardPage = () => {
  const user = { name: "Hello world" };
  return (
    <Switch>
      <RouteWithProps exact path={routes.dashboard} component={DashboardView} />
      <RouteWithProps exact path={routes.settings} component={SettingsView} />
      <RouteWithProps
        exact
        path={routes.statistics}
        extraProps={{ loggedInUser: user }}
        component={StatisticsView}
      />
    </Switch>
  );
};

export default DashboardPage;
