import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

// Layouts & Route
import routes from "./routes";
import PublicLayout from "./shared/layout/PublicLayout";
import AuthLayout from "./shared/layout/AuthLayout";

// Public pages
import LoginPage from "./pages/LoginPage";

// Authenticated pages
import DashboardPage from "./pages/DashboardPage";

const pages = [
  // Public pages
  {
    exact: true,
    path: routes.login,
    component: LoginPage,
    layout: PublicLayout
  },
  // Auth pages
  {
    exact: false,
    path: routes.dashboard,
    component: DashboardPage,
    layout: AuthLayout
  }
];

const App = () => {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Switch>
        {pages.map(
          ({ exact, path, component: Component, layout: Layout }, index) => (
            <Route
              key={index}
              exact={exact}
              path={path}
              component={props => (
                <Layout history={props.history}>
                  <Component {...props} />
                </Layout>
              )}
            />
          )
        )}
        <Redirect to={routes.dashboard} />
      </Switch>
    </Router>
  );
};

export default App;
